import { User } from 'src/components/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'state', length: 50 })
  state: string;

  @Column({ name: 'city', length: 50 })
  city: string;

  @Column({ name: 'street', length: 100 })
  street: string;

  @Column({ name: 'postal_code' })
  postalCode: number;

  //FOREIGN KEYS____________________________________________________________________________________
  @ManyToOne(() => User)
  user: User;
}
