import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { AuthService, AuthGuardService } from './auth/index';

import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { ProductsService } from './services/products.service';
import { TobuyProductModule } from './tobuy-product/tobuy-product.module';
import { PurchasedProductModule } from './purchased-product/purchased-product.module';
import { AuthModule } from './auth/auth.module';

const config = {
  apiKey: 'AIzaSyD7ucPgSovqC0QIR56zIMvyW7H1Fl5U6vk',
  authDomain: 'myshoppinglist-31a5e.firebaseio.com',
  databaseURL: 'https://myshoppinglist-31a5e.firebaseio.com',
  projectId: 'myshoppinglist-31a5e',
  storageBucket: 'myshoppinglist-31a5e.appspot.com',
  messagingSenderId: '1041837032162'
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    TobuyProductModule,
    PurchasedProductModule,
    SharedModule,
    AuthModule
  ],
  providers: [ProductsService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
