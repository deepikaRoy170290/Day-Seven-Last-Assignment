import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { fakeBackendProvider } from './helpers';
import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AlertComponent } from './alertComponent/alert.Component';
import { HomeComponent } from './homeComponent/home.component';
import { LoginComponent } from './loginComponent/login.component';
import { RegisterComponent } from './registerComponent/register.component';
import { OffersComponent } from './offersComponent/offers.component';
import { BillComponent } from './billComponent/bill.component';
import { FundTransferComponent } from './fundTransferComponent/fundTransfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OffersComponent,
    BillComponent,
    FundTransferComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
