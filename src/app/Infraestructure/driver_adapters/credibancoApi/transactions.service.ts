import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TransactionGateway } from 'src/app/domain/models/gateways/transactionGateway';
import { CancelTransactionRequest } from 'src/app/domain/models/request/CancelTransactionRequest';
import { CreateTransactionRequest } from 'src/app/domain/models/request/CreateTransactionRequest';
import { CancelTransactionResponse } from 'src/app/domain/models/response/CancelTransactionResponse';
import { CreateTransactionResponse } from 'src/app/domain/models/response/CreateTransactionResponse';
import { ResponseBase } from 'src/app/domain/models/response/ResponseBase';
import { Transaction } from 'src/app/domain/models/response/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends TransactionGateway{

  constructor(private http:HttpClient) { 
    super()
  }

  createTransaction(request: CreateTransactionRequest): Promise<ResponseBase<CreateTransactionResponse>> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return firstValueFrom(this.http.post<ResponseBase<CreateTransactionResponse>>('transactions',JSON.stringify(request), { headers: header }))
  }

  cancelTransaction(request: CancelTransactionRequest): Promise<CancelTransactionResponse> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return firstValueFrom(this.http.put<CancelTransactionResponse>('transactions',JSON.stringify(request), { headers: header }))
  }

  getAllTransactionById(cardId: String): Promise<ResponseBase<Transaction>> {
    return firstValueFrom(this.http.get<ResponseBase<Transaction>>('transactions/'+ cardId))
  }

}
