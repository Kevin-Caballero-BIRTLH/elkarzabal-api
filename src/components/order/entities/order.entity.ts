import { OrderProduct } from 'src/components/order-product/entities/order-product.entity';
import { OrderStatus } from 'src/components/order-status/entities/order-status.entity';
import { User } from 'src/components/user/entities/user.entity';
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
export class Order {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'user_id' })
  private _userId: number;

  @Column({ name: 'status_id' })
  private _statusId: number;

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
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => OrderStatus)
  orderStatus: OrderStatus;

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
   * Getter userId
   * @return {number}
   */
  public get userId(): number {
    return this._userId;
  }

  /**
   * Setter userId
   * @param {number} value
   */
  public set userId(value: number) {
    this._userId = value;
  }

  /**
   * Getter statusId
   * @return {number}
   */
  public get statusId(): number {
    return this._statusId;
  }

  /**
   * Setter statusId
   * @param {number} value
   */
  public set statusId(value: number) {
    this._statusId = value;
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
}
