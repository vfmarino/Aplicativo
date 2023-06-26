import { Component, OnInit } from '@angular/core';
import { CoinMarketCapService } from '../services/coin-market-cap/coin-market-cap.service';
import { cryptoCoinMarketCap } from '../models/cryptoCoinMarketCap/cryptoCoinMarketCap';
import { DecimalPipe } from '@angular/common';
import { FilterPipe } from '../pipe/filter.pipe';

@Component({
  selector: 'app-coin-market-cap-list',
  templateUrl: './coin-market-cap-list.component.html',
  styleUrls: ['./coin-market-cap-list.component.css'],
  providers: [DecimalPipe, FilterPipe],
})
export class CoinMarketCapListComponent implements OnInit {

  searchTerm: string = '';

  ativos: cryptoCoinMarketCap[] = [];
  pageSize: number = 10; // Quantidade de itens por página
  currentPage: number = 1; // Página atual

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  constructor( private coinMarketCapService: CoinMarketCapService) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(){
    this.coinMarketCapService.getAllAssest().subscribe(response => this.ativos = response)
  }
}
