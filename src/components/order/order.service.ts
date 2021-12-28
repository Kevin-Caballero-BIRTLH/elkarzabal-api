import { BadRequestException, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { OrderProductService } from '../order-product/order-product.service';
import { WeeklyProduct } from '../weekly-product/entities/weekly-product.entity';
import { WeeklyProductService } from '../weekly-product/weekly-product.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private _connection: Connection,
    private _orderRepository: OrderRepository,
    private _weeklyProductService: WeeklyProductService,
    private _orderProductService: OrderProductService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const queryRunner = this._connection.createQueryRunner();
    const { orderProducts } = createOrderDto;

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const order = new Order();
      order.userId = createOrderDto.userId;

      const savedOrder = await queryRunner.manager.save<Order>(order);

      for (let i = 0; i < orderProducts.length; i++) {
        orderProducts[i].orderId = savedOrder.id;
        const orderProduct = await this._orderProductService.create(
          orderProducts[i],
          queryRunner,
        );

        const weeklyProduct = await this._weeklyProductService.findOne({
          where: { id: orderProduct.weeklyProductId },
        });

        await queryRunner.manager.update(WeeklyProduct, weeklyProduct.id, {
          currentQuantity:
            weeklyProduct.currentQuantity - orderProduct.quantity,
        });
      }

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error(error);
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return this._orderRepository.findOne({
      where: { id: id },
      relations: ['orderProducts'],
    });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
