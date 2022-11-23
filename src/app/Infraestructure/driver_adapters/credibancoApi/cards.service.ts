import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { CardGateway } from 'src/app/domain/models/gateways/cardGateway';
import { ActivateCardRequest } from 'src/app/domain/models/request/ActivateCardRequest';

import { CreateCardRequest } from 'src/app/domain/models/request/CreateCardRequest';
import { ActivateCardResponse } from 'src/app/domain/models/response/ActivateCardResponse';
import { Card } from 'src/app/domain/models/response/Card';
import { CardByIdResponse } from 'src/app/domain/models/response/CardByIdResponse';
import { CreateCardResponse } from 'src/app/domain/models/response/CreateCardResponse';
import { ResponseBase } from 'src/app/domain/models/response/ResponseBase';

@Injectable({
  providedIn: 'root'
})
export class CardsService extends CardGateway {

  constructor(private http:HttpClient) { 
    super()
  }

  createCard(request: CreateCardRequest): Promise<ResponseBase<CreateCardResponse>> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return firstValueFrom(this.http.post<ResponseBase<CreateCardResponse>>('cards',JSON.stringify(request), { headers: header }))
  }

  getAll(): Promise<ResponseBase<Array<Card>>> {
    return firstValueFrom(this.http.get<ResponseBase<Array<Card>>>('cards'));
  }

  activateCard(request: ActivateCardRequest): Promise<ResponseBase<ActivateCardResponse>> {
    let header = new HttpHeaders({ 'Content-Type': 'application/json' })
    return firstValueFrom(this.http.put<ResponseBase<ActivateCardResponse>>('cards',JSON.stringify(request), { headers: header }))
  }

  getCardById(cardId: String): Promise<CardByIdResponse> {
    return firstValueFrom(this.http.get<CardByIdResponse>('cards/' + cardId))
  }

  deleteCard(cardId: String): Promise<ResponseBase<Card>> {
    return firstValueFrom(this.http.delete<ResponseBase<Card>>('cards/' + cardId))
  }
  

}


