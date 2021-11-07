import { User } from 'src/components/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', length: 15 })
  name: string;

  //FOREIGN KEYS____________________________________________________________________________________
  @OneToMany(() => User, (user) => user.role)
  Users: User[];

  //METHODS_________________________________________________________________________________________
  constructor(role: string) {
    this.name = role;
  }
}
