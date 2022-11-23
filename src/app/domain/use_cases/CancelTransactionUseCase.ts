import { Injectable } from "@angular/core";
import { TransactionGateway } from "../models/gateways/transactionGateway";
import { CancelTransactionRequest } from "../models/request/CancelTransactionRequest";

@Injectable({
    providedIn: 'root'
})

export class CancelTransactionUseCase{
    constructor(private transactionGateway: TransactionGateway){
    }

    cancelTransaction(cancelTransactionRequest:CancelTransactionRequest){
        return this.transactionGateway.cancelTransaction(cancelTransactionRequest)
    }

}