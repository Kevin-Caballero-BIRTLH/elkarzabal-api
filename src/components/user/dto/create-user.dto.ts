import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { ERole } from 'src/components/role/entities/erole';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @Length(9, 9)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  // @Length(40) //uncomment when SHA1 is enabled
  password: string;

  @IsNotEmpty()
  @IsEnum(ERole, {
    message: `Value must be between 1 and ${
      Object.keys(ERole).length / 2
    }. Possible roles are: ${Object.keys(ERole)
      .filter((role, i) => i >= Object.keys(ERole).length / 2)
      .map((roleName) => `(${ERole[roleName]} - ${roleName})`)
      .join(', ')}`,
  })
  roleId: ERole;

  @IsOptional()
  group?: string;

  @IsOptional()
  language?: string;

  @IsOptional()
  active?: boolean;
}
