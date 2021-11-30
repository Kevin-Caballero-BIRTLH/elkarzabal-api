import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { OrderProductService } from '../order-product/order-product.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private _connection: Connection,
    private _orderRepository: OrderRepository,
    private _orderProductService: OrderProductService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const queryRunner = this._connection.createQueryRunner();
    const { orderProducts } = createOrderDto;

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const order: Order = await this._orderRepository.save(createOrderDto);
      orderProducts.forEach((orderProduct) => {
        orderProduct.orderId = order.id;
        return this._orderProductService.create(orderProduct);
      });

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
