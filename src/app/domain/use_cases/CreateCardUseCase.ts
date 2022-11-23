import { Injectable } from "@angular/core";
import { CardGateway } from "../models/gateways/cardGateway";
import { CreateCardRequest } from "../models/request/CreateCardRequest";

@Injectable({
    providedIn: 'root'
})

export class createCardUseCase{
    constructor(private cardGateway: CardGateway){
    }

    createCard(createCardRequest:CreateCardRequest){
        return this.cardGateway.createCard(createCardRequest)
    }

}