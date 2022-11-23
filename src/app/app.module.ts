import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './UI/home/home.component';
import { CreateComponent } from './UI/cards/create/create.component';
import { ListComponent } from './UI/cards/list/list.component';
import { CreateTransactionComponent } from './UI/transactions/create-transaction/create-transaction.component';
import { ListTransactionsComponent } from './UI/transactions/list-transactions/list-transactions.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorInterceptor } from './Infraestructure/helpers/interceptor.interceptor';
import { CardGateway } from './domain/models/gateways/cardGateway';
import { CardsService } from './Infraestructure/driver_adapters/credibancoApi/cards.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionGateway } from './domain/models/gateways/transactionGateway';
import { TransactionsService } from './Infraestructure/driver_adapters/credibancoApi/transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    CreateTransactionComponent,
    ListTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true},
    {provide: CardGateway, useClass: CardsService},
    {provide: TransactionGateway, useClass: TransactionsService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
