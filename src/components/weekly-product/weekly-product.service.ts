import { Injectable } from '@nestjs/common';
import { CreateWeeklyProductDto } from './dto/create-weekly-product.dto';
import { UpdateWeeklyProductDto } from './dto/update-weekly-product.dto';

@Injectable()
export class WeeklyProductService {
  create(createWeeklyProductDto: CreateWeeklyProductDto) {
    return 'This action adds a new weeklyProduct';
  }

  findAll() {
    return `This action returns all weeklyProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weeklyProduct`;
  }

  update(id: number, updateWeeklyProductDto: UpdateWeeklyProductDto) {
    return `This action updates a #${id} weeklyProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} weeklyProduct`;
  }
}
