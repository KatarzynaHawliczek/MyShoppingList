import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './index';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
