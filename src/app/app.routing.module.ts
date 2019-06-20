import { TobuyProductModule } from './tobuy-product/tobuy-product.module';
import { PurchasedProductModule } from './purchased-product/purchased-product.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';

const appRoutes: Routes = [
];

@NgModule({
  imports: [
    TobuyProductModule,
    PurchasedProductModule,
    AuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
