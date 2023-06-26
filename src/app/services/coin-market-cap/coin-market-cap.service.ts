import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoinMarketCapService {

  constructor(private httpClient: HttpClient) { }

  findAssestByName(): Observable<any> {
    return this.httpClient.get('/ativos');
  }

  getAllAssest(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/assets');
  }
}
