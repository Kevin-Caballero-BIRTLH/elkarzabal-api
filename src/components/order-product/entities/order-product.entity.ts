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
  private _id: number;

  @Column({ name: 'product_id' })
  private _productId: number;

  @Column({ name: 'order_id' })
  private _orderId: number;

  @Column({ name: 'quantity', type: 'decimal', precision: 5, scale: 2 })
  private _quantity: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  private _created_at: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  private _updated_at: Date;

  //FOREIGN KEYS____________________________________________________________________________________
  @ManyToOne(() => WeeklyProduct)
  weeklyProduct: WeeklyProduct;

  @ManyToOne(() => Order)
  order: Order;

  //METHODS_________________________________________________________________________________________
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter productId
   * @return {number}
   */
  public get productId(): number {
    return this._productId;
  }

  /**
   * Setter productId
   * @param {number} value
   */
  public set productId(value: number) {
    this._productId = value;
  }

  /**
   * Getter orderId
   * @return {number}
   */
  public get orderId(): number {
    return this._orderId;
  }

  /**
   * Setter orderId
   * @param {number} value
   */
  public set orderId(value: number) {
    this._orderId = value;
  }

  /**
   * Getter quantity
   * @return {number}
   */
  public get quantity(): number {
    return this._quantity;
  }

  /**
   * Setter quantity
   * @param {number} value
   */
  public set quantity(value: number) {
    this._quantity = value;
  }

  /**
   * Getter created_at
   * @return {Date}
   */
  public get created_at(): Date {
    return this._created_at;
  }

  /**
   * Setter created_at
   * @param {Date} value
   */
  public set created_at(value: Date) {
    this._created_at = value;
  }

  /**
   * Getter updated_at
   * @return {Date}
   */
  public get updated_at(): Date {
    return this._updated_at;
  }

  /**
   * Setter updated_at
   * @param {Date} value
   */
  public set updated_at(value: Date) {
    this._updated_at = value;
  }
}
