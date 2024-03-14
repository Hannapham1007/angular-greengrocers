import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
@Input('cartProduct') cartProduct: CartItem | null = null;
constructor(private readonly cartService: CartService){}

increaseQuantity() {
  if (this.cartProduct) {
    this.cartService.increaseQuantity(this.cartProduct.id); 
  }
}
decreaseQuantity() {
  if (this.cartProduct) {
    this.cartService.decreaseQuantity(this.cartProduct.id); 
  }
}
}
