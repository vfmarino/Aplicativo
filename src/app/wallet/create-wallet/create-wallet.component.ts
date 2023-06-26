import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet/wallet';
import { WalletService } from 'src/app/services/wallet/wallet.service';


@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.css']
})
export class CreateWalletComponent implements OnInit {

  wallet: Wallet = new Wallet();

  constructor(
    private walletService: WalletService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  createWallet() {
    this.wallet.userID = 1;
    console.log(this.wallet);
    this.walletService.create(this.wallet).subscribe(
      wallet => {
        console.log(this.wallet);
        alert("Registrado Com Sucesso");
        this.route.navigate(['profile']);

      },
      error => {
        console.log(error);
        alert("Wallet was not registered")
      });

  }

}

