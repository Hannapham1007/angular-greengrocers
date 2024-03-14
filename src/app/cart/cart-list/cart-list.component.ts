import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent {
  constructor(private readonly cartService: CartService) {}
  cartProducts: CartItem[] = [];

  ngOnInit() {
    this.cartProducts = this.getCartItems();
  }
  getCartItems(): CartItem[] {
    return this.cartService.getItems();
  }
  increaseQuantity(cartProduct: CartItem) {
    this.cartService.increaseQuantity(cartProduct.id);
  }

  decreaseQuantity(cartProduct: CartItem) {
    this.cartService.decreaseQuantity(cartProduct.id);
  }
}
