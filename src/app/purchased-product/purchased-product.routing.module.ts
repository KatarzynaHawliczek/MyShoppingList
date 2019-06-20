import { Routes, RouterModule } from '@angular/router';
import { PurchasedProductComponent } from './index';
import { AuthGuardService } from '../auth';
import { NgModule } from '@angular/core';

const purchasedProductRouting: Routes = [
  {
    path: 'purchasedProduct',
    component: PurchasedProductComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(purchasedProductRouting)],
  exports: [RouterModule]
})
export class PurchasedProductRoutingModule {}
