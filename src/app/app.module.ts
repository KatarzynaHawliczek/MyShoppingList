import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TobuyProductComponent } from './tobuy-product/tobuy-product.component';
import { PurchasedProductComponent } from './purchased-product/purchased-product.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';
import { TransformProductPipe } from './shared/transform-product.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';

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
    AddProductComponent,
    TobuyProductComponent,
    PurchasedProductComponent,
    CheckedDirective,
    DateDirective,
    TransformProductPipe,
    SortNamePipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [ProductsService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
