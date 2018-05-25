import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CurrencyService} from "../../services/currency.service";
import {Currency} from "../../models/currency";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  public currency: Currency;

  constructor(private route: ActivatedRoute,
              private currencyService: CurrencyService,
              private router: Router) { }

  ngOnInit() {
    this.currencyService.getCurrencyById(this.route.snapshot.params['id']).then( currency => {
      if (currency === null) {
        this.router.navigate(['/']);
      } else {
        this.currency = currency;
      }
    } );
  }

}
