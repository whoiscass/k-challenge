import { Body, Controller, Get, Headers, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';
import { CreateOrderRequest } from './dto/create-order.request';
import { OrdersService } from './orders.service';
import { UpdateOrderRequest } from './dto/update-order';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(@Body() request: CreateOrderRequest, @Req() req: any, @Headers() headers) {
    const currentUser = req?.user;
    return this.ordersService.createOrder(request, headers?.['authorization'] as string, currentUser);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getOrders() {
    return await this.ordersService.getOrders();
  }

  @Put('/:id')
  async updateOrder(@Body() request: UpdateOrderRequest, @Param('id') id: string, @Headers() headers) {
    return await this.ordersService.updateOrder(id, request, headers?.['authorization'] as string);
  }

  @Get('/total')
  @UseGuards(JwtAuthGuard)
  async getLastMonthTotalSoldPrice() {
    return await this.ordersService.getLastMonthTotalSoldPrice();
  }

  @Get('/higher-order')
  @UseGuards(JwtAuthGuard)
  async getHigherAmountOrder() {
    return await this.ordersService.getHigherAmountOrder();
  }
}
