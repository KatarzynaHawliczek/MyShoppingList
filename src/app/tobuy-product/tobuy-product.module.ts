import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AddProductComponent, TobuyProductComponent } from './index';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddProductComponent,
    TobuyProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TobuyProductModule {}
