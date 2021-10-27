import { User } from 'src/components/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Role {
  //PROPERTIES______________________________________________________________________________________
  @PrimaryColumn()
  id: number;

  @Column({ length: 15 })
  name: string;

  //FOREIGN KEYS____________________________________________________________________________________
  @OneToMany(() => User, (user) => user.role)
  Users: User[];
}
