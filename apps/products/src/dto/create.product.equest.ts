import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateProductRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsPositive()
  @IsNotEmpty()
  price: number;
}
