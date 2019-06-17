import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  readonly apiKey = new HttpHeaders({
    'cache-control': 'no-cache',
    'x-apikey': 'x-apikey',
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient, private authService: AuthService) {
    this.getProducts();
  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = { userId: uid };
    return new HttpParams().set('q', JSON.stringify(query));
  }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      'https://angulardb-2df3.restdb.io/rest/products',
      {
        headers: this.apiKey,
        params: this.getParams()
      }
    );
  }

  saveProducts(list: Array<Product>) {
    const id = list.map(index => index._id);
    for (let i = 0; i < id.length; i++) {
      if (id[i] === undefined) {
        this.http.post('https://angulardb-2df3.restdb.io/rest/products', list[i], {
          headers: this.apiKey,
          params: this.getParams()
        })
        .subscribe(data => {console.log(data);
        });
      } else {
        this.http.put('https://angulardb-2df3.restdb.io/rest/products/'
        + id[i], list[i],
        {
          headers: this.apiKey,
          params: this.getParams()
        })
        .subscribe(data => {console.log(data);
        });
      }
    }
  }

  deleteProduct(product: Product) {
    this.http
    .delete('https://angulardb-2df3.restdb.io/rest/products/' + product._id, {
      headers: this.apiKey,
      params: this.getParams()
    })
    .subscribe(data => {console.log(data);
    });
   }
}
