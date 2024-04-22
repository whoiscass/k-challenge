export class Product {
    public _id: string;
    public name: string;
    public sku: string;
    public price: number;
    
    constructor(
        _id: string,
        name: string,
        sku: string,
        price: number,
    ) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.sku = sku;
    }
}