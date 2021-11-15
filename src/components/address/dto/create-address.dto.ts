import { 
    IsNotEmpty,
    IsString,
    IsNumber,
    IsOptional, 
    IsPostalCode,
} from 'class-validator';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    userId: number;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    street: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPostalCode()
    postal_code: number;
}
