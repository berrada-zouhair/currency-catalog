import {Injectable} from '@angular/core';
import {Currency} from '../models/currency';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {CurrenciesMock} from "../models/currencies-mock";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //j'ai utilisé un mock parce que l'api openfintech est en panne actullement.
  private currencies: Currency[] = CurrenciesMock.currencies;


  constructor(private http: HttpClient) {
  }

  public getCurrencyById(id: string): Promise<Currency> {
    const currencies = this.currencies.filter(currency => currency.id.toLowerCase() === id.toLowerCase());
    if (currencies.length) {
      return Promise.resolve(currencies[0]);
    }
    return Promise.resolve(null);
  }

  // API ne marche, pas pu faire des tests
  public getCurrenciesFromApi(pageSize: number): Observable<any> {
    const url = `https://api.openfintech.io/v1/currencies?page%5Bnumber%5D=2&page%5Bsize%5D=${pageSize}&filter%5Bcurrency_type%5D=&sort=`
    return this.http.get(url);
  }

  public getAllcurenciesForGrid(): Promise<any> {
    return Promise.resolve(this.currencies.map(c => {
      return {
        'id': c.id,
        'currency_type': c.attributes.currency_type,
        'native_symbol': c.attributes.native_symbol
      };
    }));
  }
}
