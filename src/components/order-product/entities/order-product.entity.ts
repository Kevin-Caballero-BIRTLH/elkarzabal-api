import { Order } from 'src/components/order/entities/order.entity';
import { WeeklyProduct } from 'src/components/weekly-product/entities/weekly-product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class OrderProduct {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'product_id' })
  productId: number;

  @Column({ name: 'order_id' })
  orderId: number;

  @Column({ name: 'quantity', type: 'decimal', precision: 5, scale: 2 })
  quantity: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;

  //FOREIGN KEYS____________________________________________________________________________________
  @ManyToOne(() => WeeklyProduct)
  weeklyProduct: WeeklyProduct;

  @ManyToOne(() => Order)
  order: Order;
}
