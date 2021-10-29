import { User } from 'src/components/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'user_id' })
  private _userId: number;

  @Column({ name: 'state', length: 50 })
  private _state: string;

  @Column({ name: 'city', length: 50 })
  private _city: string;

  @Column({ name: 'street', length: 100 })
  private _street: string;

  @Column({ name: 'postal_code' })
  private _postalCode: number;

  //FOREIGN KEYS____________________________________________________________________________________
  @ManyToOne(() => User)
  user: User;

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
   * Getter state
   * @return {string}
   */
  public get state(): string {
    return this._state;
  }

  /**
   * Setter state
   * @param {string} value
   */
  public set state(value: string) {
    this._state = value;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Getter street
   * @return {string}
   */
  public get street(): string {
    return this._street;
  }

  /**
   * Setter street
   * @param {string} value
   */
  public set street(value: string) {
    this._street = value;
  }

  /**
   * Getter postalCode
   * @return {number}
   */
  public get postalCode(): number {
    return this._postalCode;
  }

  /**
   * Setter postalCode
   * @param {number} value
   */
  public set postalCode(value: number) {
    this._postalCode = value;
  }
}
