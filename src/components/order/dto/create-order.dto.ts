import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';
import { CreateOrderProductDto } from 'src/components/order-product/dto/create-order-product.dto';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderProductDto)
  orderProducts: CreateOrderProductDto[];
}
