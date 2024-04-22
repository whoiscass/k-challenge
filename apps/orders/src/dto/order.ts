import { Product } from "./product";

export class Order {
    userId: string;
    name: string; 
    price: number;
    products: Product[];

    constructor(
        userId: string,
        name: string, 
        price: number,
        products: Product[],
    ) {
        this.userId = userId;
        this.name = name;
        this.price = price;
        this.products = products;
    }
  }