import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-purchased-product',
  templateUrl: './purchased-product.component.html',
  styleUrls: ['./purchased-product.component.css']
})
export class PurchasedProductComponent implements OnInit {

  productsPurchased: Array<Product> = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProductsListObs().subscribe((products: Array<Product>) => {
      this.productsPurchased = products.filter(t => t.isPurchased === true);
    });
  }

  ngOnInit() {
  }

}
