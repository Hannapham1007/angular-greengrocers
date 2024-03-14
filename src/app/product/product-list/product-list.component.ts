import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Item } from 'src/app/models/item';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
constructor(private readonly productService: ProductService){}
  products: Item[] = [];
  
  async ngOnInit(){
    this.products = await this.productService.getProducts();
  }

}
