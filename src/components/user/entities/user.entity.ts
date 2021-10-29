import { Address } from 'src/components/address/entities/address.entity';
import { Order } from 'src/components/order/entities/order.entity';
import { Product } from 'src/components/product/entities/product.entity';
import { Role } from 'src/components/role/entities/role.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'name', length: 50 })
  private _name: string;

  @Column({ name: 'lastname', length: 50 })
  private _lastname: string;

  @Column({ name: 'phone', length: 15 })
  private _phone: string;

  @Column({ name: 'email' })
  private _email: string;

  @Column({ name: 'password', length: 40 })
  private _password: string;

  @Column({ name: 'role_id' })
  private _roleId: number;

  @Column({ name: 'group', length: 20 })
  private _group: string;

  @Column({ name: 'language', length: 1 })
  private _language: string;

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
  @ManyToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

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
   * Getter lastname
   * @return {string}
   */
  public get lastname(): string {
    return this._lastname;
  }

  /**
   * Setter lastname
   * @param {string} value
   */
  public set lastname(value: string) {
    this._lastname = value;
  }

  /**
   * Getter phone
   * @return {string}
   */
  public get phone(): string {
    return this._phone;
  }

  /**
   * Setter phone
   * @param {string} value
   */
  public set phone(value: string) {
    this._phone = value;
  }

  /**
   * Getter email
   * @return {string}
   */
  public get email(): string {
    return this._email;
  }

  /**
   * Setter email
   * @param {string} value
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * Getter password
   * @return {string}
   */
  public get password(): string {
    return this._password;
  }

  /**
   * Setter password
   * @param {string} value
   */
  public set password(value: string) {
    this._password = value;
  }

  /**
   * Getter roleId
   * @return {number}
   */
  public get roleId(): number {
    return this._roleId;
  }

  /**
   * Setter roleId
   * @param {number} value
   */
  public set roleId(value: number) {
    this._roleId = value;
  }

  /**
   * Getter group
   * @return {string}
   */
  public get group(): string {
    return this._group;
  }

  /**
   * Setter group
   * @param {string} value
   */
  public set group(value: string) {
    this._group = value;
  }

  /**
   * Getter language
   * @return {string}
   */
  public get language(): string {
    return this._language;
  }

  /**
   * Setter language
   * @param {string} value
   */
  public set language(value: string) {
    this._language = value;
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
