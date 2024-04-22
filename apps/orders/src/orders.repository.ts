import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Order } from './schemas/order.schema';

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
  protected readonly logger = new Logger(OrdersRepository.name);

  constructor(
    @InjectModel(Order.name) orderModel: Model<Order>,
    @InjectConnection() connection: Connection,
  ) {
    super(orderModel, connection);
  }

  async getLastMonthTotalSoldPrice() {
    const gte = new Date();
    gte.setMonth(gte.getMonth() - 1);
    return this.model.aggregate([
      {
        $match: {
          createdAt: { 
            $gte: gte,
            $lt: new Date()
          }
        }
      },
      {
        $group: {
          _id: null,
          totalPrice: { $sum: "$price" }
        }
      }
    ]);
  }


  async getHigherAmountOrder() {
    return this.model.findOne().sort({ price: -1 });
  }
}


