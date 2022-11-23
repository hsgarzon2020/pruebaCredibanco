import { Injectable } from "@angular/core";
import { CardGateway } from "../models/gateways/cardGateway";

@Injectable({
    providedIn: 'root'
})

export class DeleteCardUseCase{
    constructor(private cardGateway: CardGateway){
    }

    DeleteCard(cardId:string){
        return this.cardGateway.deleteCard(cardId)
    }

}