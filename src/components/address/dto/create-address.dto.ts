import { 
    IsNotEmpty,
    IsString,
    IsNumber,
    Length, 
    IsPostalCode,
} from 'class-validator';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    userId: number;

    @IsNotEmpty()
    @IsString()
    @Length(50)
    state: string;

    @IsNotEmpty()
    @IsString()
    @Length(50)
    city: string;

    @IsNotEmpty()
    @IsString()
    @Length(100)
    street: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPostalCode()
    postal_code: number;
}
