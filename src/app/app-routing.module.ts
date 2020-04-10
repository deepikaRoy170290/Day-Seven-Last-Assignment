import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './homeComponent/home.component';
import { LoginComponent } from './loginComponent/login.component';
import { RegisterComponent } from './registerComponent/register.component';
import { OffersComponent } from './offersComponent/offers.component';
import { BillComponent } from './billComponent/bill.component';
import { FundTransferComponent } from './fundTransferComponent/fundTransfer.component';

import { AuthGuard } from './helpers';

const routes: Routes = [
    { path: 'fundTransfer', component: FundTransferComponent, canActivate: [AuthGuard]},
    { path: 'billPay&Recharge', component: BillComponent, canActivate: [AuthGuard] },
    { path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
