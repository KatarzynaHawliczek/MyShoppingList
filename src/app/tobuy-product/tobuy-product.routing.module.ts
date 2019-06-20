import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TobuyProductComponent } from './index';
import { AuthGuardService } from '../auth';

const tobuyProductRouting: Routes = [
  {
    path: '',
    redirectTo: '/tobuyProduct',
    pathMatch: 'full'
  },
  {
    path: 'tobuyProduct',
    component: TobuyProductComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tobuyProductRouting)],
  exports: [RouterModule]
})

export class TobuyProductRoutingModule {}
