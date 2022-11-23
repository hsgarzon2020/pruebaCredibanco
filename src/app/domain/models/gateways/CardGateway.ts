import { ActivateCardRequest } from "../request/ActivateCardRequest";
import { CreateCardRequest } from "../request/CreateCardRequest";
import { ActivateCardResponse } from "../response/ActivateCardResponse";
import { Card } from "../response/Card";
import { CardByIdResponse } from "../response/CardByIdResponse";
import { CreateCardResponse } from "../response/CreateCardResponse";
import { ResponseBase } from "../response/ResponseBase";

export abstract class CardGateway{
    abstract createCard (request:CreateCardRequest): Promise<ResponseBase<CreateCardResponse>>
    abstract getAll(): Promise<ResponseBase<Array<Card>>>
    abstract activateCard(request: ActivateCardRequest): Promise<ResponseBase<ActivateCardResponse>>
    abstract getCardById(cardId: String): Promise<CardByIdResponse>
    abstract deleteCard(cardId: String): Promise<ResponseBase<Card>>
    
}