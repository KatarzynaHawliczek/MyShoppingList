import { ProductsService } from './../services/products.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: string;

  constructor(private productsService: ProductsService) {
   }

  ngOnInit() {
  }

  add() {
    const product: Product = {name: this.newProduct, created: new Date() };
    this.productsService.add(product);
    this.newProduct = '';
  }

}
