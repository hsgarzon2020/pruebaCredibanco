import { Injectable } from "@angular/core";
import { CardGateway } from "../models/gateways/cardGateway";


@Injectable({
    providedIn: 'root'
})

export class GetCardUseCase{
    constructor(private cardGateway: CardGateway){
    }

    getAll(){
        return this.cardGateway.getAll()
    }

    getCardByID(cardId:string){
        return this.cardGateway.getCardById(cardId)
    }

}