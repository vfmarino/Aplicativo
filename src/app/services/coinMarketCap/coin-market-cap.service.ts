import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import axios from 'axios';

interface CoinMarketCapPrice {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
    };
  };
}

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapService {

  private readonly baseUrl = '/api';
  private readonly apiKey = '73ef8b4d-8c7d-4934-bceb-4e72a823ce3a';

  constructor() { }

  getPrices(): Observable<any[]> {
    const url = `${this.baseUrl}/listings/latest`;
    const headers = {
      'X-CMC_PRO_API_KEY': this.apiKey,
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };
    return from(axios.get(url, { headers })
      .then(response => response.data.data)
      .then((data: CoinMarketCapPrice[]) => {
        return data.map((item: CoinMarketCapPrice) => {
          return {
            id: item.id,
            name: item.name,
            symbol: item.symbol,
            price: item.quote.USD.price
          };
        });
      })
    );
  }
}
