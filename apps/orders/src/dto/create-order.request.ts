import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  products: string[];
}
