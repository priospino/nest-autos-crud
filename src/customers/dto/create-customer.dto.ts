import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsEmail()
  email: string;
}
