import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Product } from 'src/components/product/entities/product.entity';

export default class CreateProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Product)
      .values([
        new Product('Pimiento', 2, 'Kg', 'es un pimiento'),
        new Product('Zanahoria', 2, 'Kg', 'es una zanahoria'),
        new Product('Patata', 2, 'Kg', 'es una patata'),
        new Product('Nabo', 2, 'Kg', 'es un nabo'),
        new Product('Lechuga', 2, 'Kg', 'es una lechuga'),
        new Product('Coliflor', 2, 'Kg', 'es una colifrol'),
        new Product('Manzana', 2, 'Kg', 'es una manzana'),
        new Product('Limon', 2, 'Kg', 'es un limon'),
        new Product('Pepino', 2, 'Kg', 'es una pepino'),
        new Product('Champi', 2, 'Kg', 'es una campi'),
        new Product('Queso', 2, 'Kg', 'es una queso'),
      ])
      .execute();
  }
}
