import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OrderStatus {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  private _id: number;

  @Column({ name: 'name' })
  private _name: string;

  //FOREIGN KEYS____________________________________________________________________________________

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
}
