import { Injectable } from '@nestjs/common';
import { CreateProductRequest } from './dto/create.product.equest';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {

  constructor(
    private readonly productsRepository: ProductsRepository
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createProduct(request: CreateProductRequest) {
    const session = await this.productsRepository.startTransaction();
    try {

      const product = await this.productsRepository.create(request, { session });
      await session.commitTransaction();

      return product;
      
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getProducts() {
    return await this.productsRepository.find({});
  }

  async getProductsBySku(sku: string[]) {

    return await this.productsRepository.find({ "sku" : { "$in" : sku } });
  }
}
