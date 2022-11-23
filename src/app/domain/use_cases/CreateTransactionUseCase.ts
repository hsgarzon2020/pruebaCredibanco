import { Injectable } from "@angular/core";
import { TransactionGateway } from "../models/gateways/transactionGateway";
import { CreateTransactionRequest } from "../models/request/CreateTransactionRequest";

@Injectable({
    providedIn: 'root'
})

export class createTransactionUseCase{
    constructor(private transactionGateway: TransactionGateway){
    }

    createTransaction(createTransactionRequest:CreateTransactionRequest){
        return this.transactionGateway.createTransaction(createTransactionRequest)
    }

}