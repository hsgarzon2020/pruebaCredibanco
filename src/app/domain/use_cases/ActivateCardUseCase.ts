import { Injectable } from "@angular/core";
import { CardGateway } from "../models/gateways/cardGateway";
import { ActivateCardRequest } from "../models/request/ActivateCardRequest";

@Injectable({
    providedIn: 'root'
})

export class ActivateCardUseCase{
    constructor(private cardGateway: CardGateway){
    }

    activateCard(activateCard:ActivateCardRequest){
        return this.cardGateway.activateCard(activateCard)
    }

}