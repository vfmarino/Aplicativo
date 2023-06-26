import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/models/wallet/wallet';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { WalletService } from 'src/app/services/wallet/wallet.service';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.css']
})
export class InvestimentoComponent implements OnInit {
  wallets: Wallet[] = [];
  constructor(
    private walletService: WalletService,
    private userService: UserServiceService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userID = +params['userID'];
      this.getUserWallet(userID);
    });
  }
  openWallet(id: number){
    this.route.navigate(['wallet', id])
  }
  deleteWallet(id: number){
    const confirmacao = confirm(
      "Deseja continuar?Isso irá deletar sua carteira e os dados nao poderam ser recuperados");
    if (confirmacao) {
      this.walletService.delete(id).subscribe(()=>{
        alert('Carteira deletada com Sucesso');
        this.ngOnInit();
      }, (error) =>{
        alert('Ocorreu erro ao deletar a Carteira');
      } );
    } else {
      // O usuário cancelou
      alert('Sua carteira foi mantida');
    }
  }

  getUserWallet(userID:number){
    this.userService.getUserWallets(userID).subscribe(
      response => {
        this.wallets = response;
        console.log(this.wallets);
      }
    );
  }
}
