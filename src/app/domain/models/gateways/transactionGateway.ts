import { CancelTransactionRequest } from "../request/CancelTransactionRequest";
import { CreateTransactionRequest } from "../request/CreateTransactionRequest";
import { CancelTransactionResponse } from "../response/CancelTransactionResponse";
import { CreateTransactionResponse } from "../response/CreateTransactionResponse";
import { ResponseBase } from "../response/ResponseBase";
import { Transaction } from "../response/Transaction";


export abstract class TransactionGateway{
    abstract createTransaction (request:CreateTransactionRequest): Promise<ResponseBase<CreateTransactionResponse>>
    abstract getAllTransactionById(cardId: String): Promise<ResponseBase<Transaction>>
    abstract cancelTransaction(request: CancelTransactionRequest): Promise<CancelTransactionResponse>
}