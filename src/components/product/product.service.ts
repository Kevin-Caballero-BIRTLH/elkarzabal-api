import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FindOneOptions } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly configService: ConfigService,
  ) {}

  async create(createProductDto: CreateProductDto, paths: string) {
    const product = await this.productRepository.save({
      ...createProductDto,
      images: paths,
    });

    return { ...product, images: JSON.parse(product.images) };
  }

  async findAll() {
    const products = await this.productRepository.findAllActives();
    return products.map((p) => ({ ...p, images: JSON.parse(p.images) }));
  }

  async findAllBaseProduct() {
    const products = await this.productRepository.find();
    return products.map((p) => ({ ...p, images: JSON.parse(p.images) }));
  }

  async findAllMyProducts(userId: number) {
    const products = await this.productRepository.findAllMyProducts(userId);
    return products.map((p) => ({ ...p, images: JSON.parse(p.images) }));
  }

  async findOne(findOneOptions: FindOneOptions) {
    const product = await this.productRepository.findOne(findOneOptions);
    return { ...product, images: JSON.parse(product.images) };
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.productRepository.findOne({
      where: { id: id },
    });
    if (!productToUpdate.id) return `There is no product with id #${id}`;
    await this.productRepository.update(id, updateProductDto);
    return this.productRepository.findOne({ where: { id: id } });
  }

  async remove(id: number) {
    const productToDelete = await this.productRepository.findOne({
      where: { id: id },
    });

    if (!productToDelete.id) {
      return `There is no product with id #${id}`;
    } else {
      await this.productRepository.delete(id);
      return `The product with the id #${id} was removed`;
    }
  }
}
