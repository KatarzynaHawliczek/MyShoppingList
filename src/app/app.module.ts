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

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    TobuyProductComponent,
    PurchasedProductComponent,
    CheckedDirective,
    DateDirective,
    TransformProductPipe,
    SortNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
