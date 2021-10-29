import { User } from 'src/components/user/entities/user.entity';
import { WeeklyProduct } from 'src/components/weekly-product/entities/weekly-product.entity';
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
export class Product {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'name' })
  private _name: string;

  @Column({ name: 'user_id' })
  private _userId: number;

  @Column({ name: 'measurement_unit', length: 10 })
  private _measurementUnit: string;

  @Column({ name: 'description', type: 'text' })
  private _description: string;

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

  @OneToMany(() => WeeklyProduct, (weeklyProduct) => weeklyProduct.product)

  //METHODS_________________________________________________________________________________________
  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
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
   * Getter measurementUnit
   * @return {string}
   */
  public get measurementUnit(): string {
    return this._measurementUnit;
  }

  /**
   * Setter measurementUnit
   * @param {string} value
   */
  public set measurementUnit(value: string) {
    this._measurementUnit = value;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
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
