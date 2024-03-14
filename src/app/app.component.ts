import { Component } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-green-grocers';

  constructor(private readonly cartService: CartService) {}

  get total(): number {
    return this.cartService.totalCost;
  }
}
