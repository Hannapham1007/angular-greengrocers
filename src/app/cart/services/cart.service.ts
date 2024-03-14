import { Injectable } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemsInCart: CartItem[] = [];
  totalCost: number = 0.0;

  getItems(): CartItem[] {
    return this.itemsInCart;
  }

  addItem(item: Item) {
    const itemCart = this.itemsInCart.find((i) => i.id === item.id);
    if (itemCart) {
      itemCart.quantity++;
    } else {
      this.itemsInCart.push({ ...item, quantity: 1 });
    }
    this.totalCost += item.price;
  }

  increaseQuantity(itemId: string) {
    const cartItem = this.itemsInCart.find((item) => item.id === itemId);
    if (cartItem) {
      cartItem.quantity++;
      this.totalCost += cartItem.price;
    }
    
  }
  
  decreaseQuantity(itemId: string) {
    const index = this.itemsInCart.findIndex(item => item.id === itemId);
    if (index !== -1) {
      const cartItem = this.itemsInCart[index];
      if (cartItem.quantity > 1) {
        cartItem.quantity--;
        this.totalCost -= cartItem.price;
      } else {
        this.itemsInCart.splice(index, 1);
        this.totalCost -= cartItem.price;
      }
    }
  }
  
  

}
