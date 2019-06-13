import { TobuyProductComponent } from './tobuy-product/tobuy-product.component';
import { PurchasedProductComponent } from './purchased-product/purchased-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tobuyProduct',
    pathMatch: 'full'
  },
  {
    path: 'tobuyProduct',
    component: TobuyProductComponent
  },
  {
    path: 'purchasedProduct',
    component: PurchasedProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
