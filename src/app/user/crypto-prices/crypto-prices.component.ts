import { Component, OnInit } from '@angular/core';

import { CoinMarketCapService } from '../../services/coinMarketCap/coin-market-cap.service';

@Component({
  selector: 'app-crypto-prices',
  templateUrl: './crypto-prices.component.html',
  styleUrls: ['./crypto-prices.component.css']
})
export class CryptoPricesComponent implements OnInit {

  prices: any[] = [];

  constructor(
    private coinMarketCapService: CoinMarketCapService
  ) { }

  ngOnInit() {
    this.coinMarketCapService.getPrices()
      .subscribe(prices => {
        this.prices = prices;
      });
  }
}
