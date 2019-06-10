import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-tobuy-product',
  templateUrl: './tobuy-product.component.html',
  styleUrls: ['./tobuy-product.component.css']
})
export class TobuyProductComponent implements OnInit {

  productsList: Array<Product> = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsList = products.slice();
    });
  }

  ngOnInit() {
  }

  remove(product: Product) {
    this.productsService.remove(product);
  }

  purchased(product: Product) {
    product.end = new Date();
    this.productsService.purchased(product);
  }

  getColor(): string {
    return this.productsList.length >= 5 ? 'red' : 'green';
  }

}
