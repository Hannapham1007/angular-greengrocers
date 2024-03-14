import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input('product') product: Item | null = null;

  constructor(private readonly cartService: CartService) {}

  addToCart() {
    if (this.product) {
      this.cartService.addItem(this.product);
    }
  }
  
}
