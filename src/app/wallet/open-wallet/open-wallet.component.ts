import { WalletService } from '../../services/wallet/wallet.service';
import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../models/wallet/wallet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open-wallet',
  templateUrl: './open-wallet.component.html',
  styleUrls: ['./open-wallet.component.css']
})
export class OpenWalletComponent implements OnInit {
  wallet!: Wallet;

  constructor(
    private walletService: WalletService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const walletId = this.route.snapshot.params['id'];
    if (walletId) {
      this.getWallet(walletId);
    }
  }

  getWallet(id: number) {
    this.walletService.getWalletById(id).subscribe(
      response => {
        this.wallet = response;
        console.log(this.wallet);
      },
      error => {
        console.error(error);
      }
    );
  }
}

