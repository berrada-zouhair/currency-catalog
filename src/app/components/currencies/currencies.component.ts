import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  public currencies: any[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getAllcurenciesForGrid().then( currencies => this.currencies = currencies );
  }

  handleCurrencyClick(id: string) {
    console.log('>>>>>>>', id);
  }
}
