import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './user/profile/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user/user.component';
import { OperacaoComponent } from './operacao/operacao/operacao.component';
import { MenuComponent } from './user/menu/menu.component';
import { CoinMarketCapListComponent } from './coin-market-cap-list/coin-market-cap-list.component';
import { WalletComponent } from './wallet/wallet/wallet.component';
import { OpenWalletComponent } from './wallet/open-wallet/open-wallet.component';
import { CreateWalletComponent } from './wallet/create-wallet/create-wallet.component';
import { TransactionBalanceComponent } from './wallet/transaction-balance/transaction-balance.component';
import { AllTransactionByWalletIdComponent } from './wallet/all-transaction-by-wallet-id/all-transaction-by-wallet-id.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipe/filter.pipe';
import { FinancasComponent } from './user/financas/financas.component';
import { InvestimentoComponent } from './user/investimento/investimento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    UserComponent,
   OperacaoComponent,
    MenuComponent,
    CoinMarketCapListComponent,
    WalletComponent,
    OpenWalletComponent,
    CreateWalletComponent,
    TransactionBalanceComponent,
    AllTransactionByWalletIdComponent,
    FilterPipe,
    FinancasComponent,
    InvestimentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
