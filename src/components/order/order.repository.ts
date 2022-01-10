import { EntityRepository, Repository } from 'typeorm';
import { Order } from './entities/order.entity';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  findDetailedOrderById(orderId: number) {
    return this.findOne({
      where: { id: orderId },
      relations: [
        'user',
        'orderProducts',
        'orderProducts.weeklyProduct',
        'orderProducts.weeklyProduct.product',
      ],
    });
  }
}
