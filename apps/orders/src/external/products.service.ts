import { Injectable } from '@nestjs/common';

@Injectable()
export class ExternalProductsService {
  async getProducts(products: string[], authorization: string) {
    const fullProducts = await fetch(`http://products:3002/products/order?sku=${products?.join('%')}`, {
      method: 'GET',
      headers: {
        'Authorization': authorization,
      },
    });
    return await fullProducts.json();
  }
}

