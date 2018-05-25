import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import {RouterModule, Routes} from '@angular/router';
import {MatGridListModule} from '@angular/material';

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
    RouterModule.forRoot(routes),
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
