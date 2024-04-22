export type Product = {
    _id?: string;
    price: number;
    sku: string;
}

export type OrderType = {
    _id?: string;
    userName: string;
    userId: string;
    price: number;
    products: Product[];
}