import { Injectable } from "@angular/core";
import { TransactionGateway } from "../models/gateways/transactionGateway";

@Injectable({
    providedIn: 'root'
})

export class getTransactionUseCase{
    constructor(private transactionGateway: TransactionGateway){
    }

    getTransactionByCardId(cardId:string){
        return this.transactionGateway.getAllTransactionById(cardId)
    }
}