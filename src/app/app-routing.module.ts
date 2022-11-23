import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './UI/cards/create/create.component';
import { ListComponent } from './UI/cards/list/list.component';
import { HomeComponent } from './UI/home/home.component';
import { CreateTransactionComponent } from './UI/transactions/create-transaction/create-transaction.component';
import { ListTransactionsComponent } from './UI/transactions/list-transactions/list-transactions.component';

const routes: Routes = [
  //route templates
  {path: 'home', component:HomeComponent},
  {path: 'create-card', component: CreateComponent},
  {path: 'list-card', component: ListComponent },
  {path: 'create-transaction', component: CreateTransactionComponent },
  {path: 'list-transaction', component: ListTransactionsComponent},
  //ruta por  defecto
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
