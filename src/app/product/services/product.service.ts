import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { CartItem } from 'src/app/models/cartItem';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
http = inject(HttpClient)
products: any;

async getProducts() {
  try {
    const result = await firstValueFrom(this.http.get(`${environment.apiUrl}/groceries`));
    this.products = result;
    console.log('Fetched products:', this.products);
    return this.products;
  } catch (error) {
    console.error('Error fetching products:', error); 
    throw error;
  }
}


 cart : CartItem[] = [];

 addItemToCart(newItem :Item){
  const cartItem = this.cart.find((item) => item.id === newItem.id );
  if(cartItem){
    cartItem.quantity++;
  }else{
    this.cart.push({...newItem, quantity:1})
    }
  }


}

