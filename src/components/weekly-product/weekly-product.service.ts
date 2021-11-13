import { Injectable } from '@nestjs/common';
import { FindOneOptions } from 'typeorm';
import { CreateWeeklyProductDto } from './dto/create-weekly-product.dto';
import { UpdateWeeklyProductDto } from './dto/update-weekly-product.dto';
import { WeeklyProductRepository } from './weekly-product.repository';

@Injectable()
export class WeeklyProductService {
  constructor(private weeklyProductRepository: WeeklyProductRepository) {}

  create(createWeeklyProductDto: CreateWeeklyProductDto) {
    return this.weeklyProductRepository.save(createWeeklyProductDto);
  }

  findAll() {
    return this.weeklyProductRepository.find();
  }

  findOne(findOneOptions: FindOneOptions) {
    return this.weeklyProductRepository.findOne(findOneOptions);
  }

  async update(id: number, updateWeeklyProductDto: UpdateWeeklyProductDto) {
    const weeklyProductToUpdate = await this.weeklyProductRepository.findOne({
      where: { id: id },
    });
    if (!weeklyProductToUpdate.id) return `There is no product with id #${id}`;
    await this.weeklyProductRepository.update(id, updateWeeklyProductDto);
    return await this.weeklyProductRepository.findOne({ where: { id: id } });
  }

  async remove(id: number) {
    const weeklyProductToDelete = await this.weeklyProductRepository.findOne({
      where: { id: id },
    });

    if (!weeklyProductToDelete.id) {
      return `There is no weekly product with id #${id}`;
    } else {
      await this.weeklyProductRepository.delete(id);
      return `The weekly product with the id #${id} was removed`;
    }
  }
}
