import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PurchasedProductComponent } from './index';
import { SharedModule } from '../shared/shared.module';
import { PurchasedProductRoutingModule } from './purchased-product.routing.module';

@NgModule({
  declarations: [
    PurchasedProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PurchasedProductRoutingModule,
  ]
})
export class PurchasedProductModule {}
