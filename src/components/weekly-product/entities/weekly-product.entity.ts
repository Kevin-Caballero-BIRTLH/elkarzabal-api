import { OrderProduct } from 'src/components/order-product/entities/order-product.entity';
import { Product } from 'src/components/product/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class WeeklyProduct {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'product_id' })
  private _productId: number;

  @Column({ name: 'min_quantity', type: 'decimal', precision: 5, scale: 2 })
  private _minQuantity: number;

  @Column({ name: 'max_quantity', type: 'decimal', precision: 5, scale: 2 })
  private _maxQuantity: number;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  private _price: number;

  @Column({ name: 'active' })
  private _active: boolean;

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
  @ManyToOne(() => Product)
  product: Product;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order)
  orderProducts: OrderProduct[];

  //METHODS_________________________________________________________________________________________
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter minQuantity
   * @return {number}
   */
  public get minQuantity(): number {
    return this._minQuantity;
  }

  /**
   * Setter minQuantity
   * @param {number} value
   */
  public set minQuantity(value: number) {
    this._minQuantity = value;
  }

  /**
   * Getter maxQuantity
   * @return {number}
   */
  public get maxQuantity(): number {
    return this._maxQuantity;
  }

  /**
   * Setter maxQuantity
   * @param {number} value
   */
  public set maxQuantity(value: number) {
    this._maxQuantity = value;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }

  /**
   * Getter active
   * @return {boolean}
   */
  public get active(): boolean {
    return this._active;
  }

  /**
   * Setter active
   * @param {boolean} value
   */
  public set active(value: boolean) {
    this._active = value;
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
