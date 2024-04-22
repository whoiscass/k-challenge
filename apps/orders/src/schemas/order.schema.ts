import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';
import { Product } from '../dto/product';

@Schema({ versionKey: false, timestamps: true })
export class Order extends AbstractDocument {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  products: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
