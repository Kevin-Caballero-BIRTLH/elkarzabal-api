import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeeklyProductService } from './weekly-product.service';
import { CreateWeeklyProductDto } from './dto/create-weekly-product.dto';
import { UpdateWeeklyProductDto } from './dto/update-weekly-product.dto';

@Controller('weekly-product')
export class WeeklyProductController {
  constructor(private readonly weeklyProductService: WeeklyProductService) {}

  @Post()
  create(@Body() createWeeklyProductDto: CreateWeeklyProductDto) {
    return this.weeklyProductService.create(createWeeklyProductDto);
  }

  @Get()
  findAll() {
    return this.weeklyProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weeklyProductService.findOne({ where: { id: +id } });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWeeklyProductDto: UpdateWeeklyProductDto,
  ) {
    return this.weeklyProductService.update(+id, updateWeeklyProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weeklyProductService.remove(+id);
  }
}
