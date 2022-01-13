import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/components/user/entities/user.entity';
import { ERole } from 'src/components/role/entities/erole';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        new User(
          'ADMIN',
          'ADMIN',
          '611111111',
          'admin@admin.com',
          'admin',
          ERole.ADMIN,
          'ESP',
          'calle ejemplo 123',
        ),
        new User(
          'VENDOR',
          'VENDOR',
          '622222222',
          'vendor@vendor.com',
          'vendor',
          ERole.VENDOR,
          'ESP',
          'calle ejemplo 123',
        ),
        new User(
          'CUSTOMER',
          'CUSTOMER',
          '633333333',
          'customer@customer.com',
          'customer',
          ERole.CUSTOMER,
          'EUS',
          'calle ejemplo 123',
        ),
      ])
      .execute();
  }
}
