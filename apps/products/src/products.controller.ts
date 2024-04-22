import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductRequest } from './dto/create.product.equest';
import { JwtAuthGuard } from '@app/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createProducts(@Body() request: CreateProductRequest) {
    return await this.productsService.createProduct(request);
  }

  @Get('/order')
  @UseGuards(JwtAuthGuard)
  async asd(@Query() query: any) {
    const sku: string[] = (query?.['sku'] as string).split('%');

    return await this.productsService.getProductsBySku(sku);
  }
}
