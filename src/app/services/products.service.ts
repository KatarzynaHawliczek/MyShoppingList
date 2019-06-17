import { HttpService } from './http.service';
import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ProductsService {

  private productsListObs = new BehaviorSubject<Array<Product>>([]);

  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.productsListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getProducts().subscribe(list => {
      this.productsListObs.next(list);
    });
  }

  add(product: Array<Product>) {
    const list = this.productsListObs.getValue().concat(product);
    this.productsListObs.next(list);
  }

  remove(product: Product) {
    const list = this.productsListObs.getValue().filter(e => e !== product);
    this.productsListObs.next(list);
  }

  purchased(product: Product) {
    product.purchased = new Date().toLocaleDateString();
    product.isPurchased = true;
    const list = this.productsListObs.getValue();
    this.productsListObs.next(list);
  }

  getProductsListObs(): Observable<Array<Product>> {
    return this.productsListObs.asObservable();
  }

  saveProductsInDb() {
    this.httpService.saveProducts(this.productsListObs.getValue());
  }

}
