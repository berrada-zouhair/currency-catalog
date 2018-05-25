import {Component, OnInit} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit {

  cols: number;
  public currencies: any[] = [];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.currencyService.getAllcurenciesForGrid().then( currencies => this.currencies = currencies );
    if (window.innerWidth < 768) {
      this.cols = 2;
    } else if (window.innerWidth < 1280) {
      this.cols = 4;
    } else {
      this.cols = 6;
    }
  }


}
