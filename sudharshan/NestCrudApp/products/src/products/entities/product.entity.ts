import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop()
  productName: string;
  @Prop()
  description: string;
  @Prop()
  price: number;
}
export const productSchema = SchemaFactory.createForClass(Product);
