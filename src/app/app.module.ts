import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule, MatGridListModule} from '@angular/material';
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {path: 'currencies', component: CurrenciesComponent},
  {path: 'currency/:id', component: CurrencyComponent},
  {path: '', redirectTo: '/currencies', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    CurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
