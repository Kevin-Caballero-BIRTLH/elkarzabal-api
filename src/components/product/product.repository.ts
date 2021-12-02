import { EntityRepository, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  public findAllActives() {
    return this.createQueryBuilder('p')
      .leftJoinAndSelect('p.weeklyProducts', 'pw')
      .where('pw.active = :active', { active: true })
      .getMany();
  }

  public findAllMyProducts(userId: number) {
    return this.createQueryBuilder('p')
      .leftJoinAndSelect('p.weeklyProducts', 'pw')
      .where('pw.active = :active', { active: true })
      .andWhere('p.userId = :userId', { userId })
      .getMany();
  }
}
