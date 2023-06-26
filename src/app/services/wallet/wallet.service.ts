import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet/wallet';


@Injectable({
  providedIn: 'root'
})
export class WalletService {

  private apiUrl = 'http://localhost:3000/carteira';

  constructor(private httpClient: HttpClient) { }

  create(wallet: Wallet): Observable<Wallet> {
    const url = `${this.apiUrl}/create`;
    return this.httpClient.post<Wallet>(url, wallet);
  }

  delete(id: number): Observable<Wallet> {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete<Wallet>(url);
  }

  getWalletById(id: number): Observable<Wallet> {
    const url = `${this.apiUrl}/getById/${id}`;
    return this.httpClient.get<Wallet>(url);
  }
}
