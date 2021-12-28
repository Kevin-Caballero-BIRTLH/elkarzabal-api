import { PartialType } from '@nestjs/swagger';
import { CreateWeeklyProductDto } from './create-weekly-product.dto';

export class UpdateWeeklyProductDto extends PartialType(CreateWeeklyProductDto) {}
