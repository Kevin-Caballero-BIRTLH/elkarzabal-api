import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderProductDto {
  @IsNotEmpty()
  @IsNumber()
  weeklyProductId: number;

  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
