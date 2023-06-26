import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './user/profile/profile/profile.component';
import { OperacaoComponent } from './operacao/operacao/operacao.component';
import { CoinMarketCapListComponent } from './coin-market-cap-list/coin-market-cap-list.component';

import { WalletComponent } from './wallet/wallet/wallet.component';
import { OpenWalletComponent } from './wallet/open-wallet/open-wallet.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';
import { FinancasComponent } from './user/financas/financas.component';
import { InvestimentoComponent } from './user/investimento/investimento.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'operacao', component: OperacaoComponent },
  { path: 'ativos', component: CoinMarketCapListComponent },
  { path: 'createWallet', component: CreateWalletComponent},
  { path: 'wallet/:id', component: WalletComponent},
  { path: 'openWallet/:id', component: OpenWalletComponent },
  { path: 'financas', component: FinancasComponent},
  { path: 'investimentos/:userID', component: InvestimentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
