import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  private productsList: Array<Product> = [];
  private productsPurchased: Array<Product> = [];

  private productsListObs = new BehaviorSubject<Array<Product>>([]);
  private productsPurchasedObs = new BehaviorSubject<Array<Product>>([]);

  constructor() {
    this.productsList = [
      {name: 'chleb', created: new Date()},
      {name: 'kiełbasa', created: new Date()},
      {name: 'piwo', created: new Date()},
      {name: 'czekolada', created: new Date()}
    ];
    this.productsListObs.next(this.productsList);
  }

  add(product: Product) {
    this.productsList.push(product);
    this.productsListObs.next(this.productsList);
  }

  remove(product: Product) {
    this.productsList = this.productsList.filter(e => e !== product);
    this.productsListObs.next(this.productsList);
  }

  purchased(product: Product) {
    this.productsPurchased.push(product);
    this.remove(product);
    this.productsPurchasedObs.next(this.productsPurchased);
  }

  getProductsListObs(): Observable<Array<Product>> {
    return this.productsListObs.asObservable();
  }

  getProductsPurchasedObs(): Observable<Array<Product>> {
    return this.productsPurchasedObs.asObservable();
  }

}
