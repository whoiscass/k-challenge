import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersRepository } from './orders.repository';
import { ExternalProductsService } from './external/products.service';
import { Product } from './dto/product';
import { Order } from './dto/order';
import { UpdateOrderRequest } from './dto/update-order';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly externalProductsService: ExternalProductsService,
  ) {}

  async createOrder(request: CreateOrderRequest, authorization: string, currentUser: any) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const products: Product[] = await this.getProducts(request.products, authorization);
      if (products.length < 1) {
        throw new NotFoundException('Products not found');
      }

      let price = 0;
      for (const i of products) {
        price += i?.price;
      }

      const orderToSave: Order = new Order(currentUser?.['_id'], request.name, price, products);
      
      const order = await this.ordersRepository.create(orderToSave, { session });
      await session.commitTransaction();
      return order;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }

  async updateOrder(id: string, request: UpdateOrderRequest, authorization: string) {
    const products: Product[] = await this.getProducts(request.products, authorization);
    let price = 0;
      for (const i of products) {
        price += i?.price;
      }
    return await this.ordersRepository.findOneAndUpdate(
      { _id: id },
      { $set: { products: products, price: price }}
    );
  }

  async getLastMonthTotalSoldPrice() {
    return await this.ordersRepository.getLastMonthTotalSoldPrice();
  }

  async getHigherAmountOrder() {
    return await this.ordersRepository.getHigherAmountOrder();
  }

  private async getProducts(products: string[], authorization: string) {
    return await await this.externalProductsService.getProducts(products, authorization);
  }
}
