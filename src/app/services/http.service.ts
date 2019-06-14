import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  readonly apiKey = new HttpHeaders({
    'cache-control': 'no-cache',
    'x-apikey': 'b220e3eea53851ad5b7ee73bcd077e18199ba',
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      'https://angulardb-2df3.restdb.io/rest/products',
      {
        headers: this.apiKey
      }
    );
  }

  saveProducts(list: Array<Product>) {
    const id = list.map(index => index._id);
    for (let i = 0; i < id.length; i++) {
      if (id[i] === undefined) {
        this.http.post('https://angulardb-2df3.restdb.io/rest/products', list[i], {
          headers: this.apiKey
        })
        .subscribe(data => {console.log(data);
        });
      } else {
        this.http.put('https://angulardb-2df3.restdb.io/rest/products/'
        + id[i], list[i],
        {
          headers: this.apiKey
        })
        .subscribe(data => {console.log(data);
        });
      }
    }
  }

  deleteProduct(product: Product) {
    this.http
    .delete('https://angulardb-2df3.restdb.io/rest/products/' + product._id, {
      headers: this.apiKey
    })
    .subscribe(data => {console.log(data);
    });
   }
}
