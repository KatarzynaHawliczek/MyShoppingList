import { TobuyProductComponent } from './tobuy-product/tobuy-product.component';
import { PurchasedProductComponent } from './purchased-product/purchased-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/tobuyProduct',
    pathMatch: 'full'
  },
  {
    path: 'tobuyProduct',
    component: TobuyProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'purchasedProduct',
    component: PurchasedProductComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
