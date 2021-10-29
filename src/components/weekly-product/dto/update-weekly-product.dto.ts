import { PartialType } from '@nestjs/mapped-types';
import { CreateWeeklyProductDto } from './create-weekly-product.dto';

export class UpdateWeeklyProductDto extends PartialType(CreateWeeklyProductDto) {}
