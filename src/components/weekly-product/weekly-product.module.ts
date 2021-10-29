import { Module } from '@nestjs/common';
import { WeeklyProductService } from './weekly-product.service';
import { WeeklyProductController } from './weekly-product.controller';

@Module({
  controllers: [WeeklyProductController],
  providers: [WeeklyProductService]
})
export class WeeklyProductModule {}
