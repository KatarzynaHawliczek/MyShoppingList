import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

import { PurchasedProductComponent } from './index';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PurchasedProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PurchasedProductModule {}
