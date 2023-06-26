import { Component, OnInit } from '@angular/core';
import { cryptoCoinMarketCap } from 'src/app/models/cryptoCoinMarketCap/cryptoCoinMarketCap';
import { CoinMarketCapService } from '../../services/coin-market-cap/coin-market-cap.service';

@Component({
  selector: 'app-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  ativos: cryptoCoinMarketCap[] = [];

  constructor(
    private coinMarketCapService: CoinMarketCapService
  ) { }

  ngOnInit(): void {
    this.getAssets();
  }

  findAssetsByName() {
    this.coinMarketCapService.findAssestByName();
  }


  getAssets(){
    this.coinMarketCapService.getAllAssest().subscribe(response => this.ativos = response)
  }
}
