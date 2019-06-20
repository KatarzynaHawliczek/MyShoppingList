import { Component, OnInit } from '@angular/core';
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
    console.log('TobuyProductComponent');
    this.productsService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsList = products.filter(t => t.isPurchased === false);
    });
  }

  ngOnInit() {
  }

  remove(product: Product) {
    this.productsService.remove(product);
  }

  purchased(product: Product) {
    this.productsService.purchased(product);
  }

  getColor(): string {
    return this.productsList.length >= 5 ? 'red' : 'green';
  }

  save() {
    this.productsService.saveProductsInDb();
  }
}
