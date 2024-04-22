import { IsNotEmpty } from 'class-validator';

export class UpdateOrderRequest {
  @IsNotEmpty()
  products: string[];
}
