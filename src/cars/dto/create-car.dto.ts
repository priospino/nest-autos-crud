import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {

    @IsString()
    readonly brand: string;

    @IsString({message: 'El modelo debe ser string'})
    @MinLength(3)
    readonly model: string;

}