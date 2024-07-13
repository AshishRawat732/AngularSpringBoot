import { Product } from "./product";

export class CartItem {
    id: number=1;
    name: string='';
    imageUrl: string='';
    unitPrice: number=1;
    quantity: number=1;

    constructor(product: Product){
      this.id = product.id;
      this.name = product.name;
      this.imageUrl = product.imageUrl;
      this.unitPrice = product.unitPrice;
    }
}
