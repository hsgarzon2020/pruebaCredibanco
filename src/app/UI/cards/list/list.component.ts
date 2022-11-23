import { Component, OnInit } from '@angular/core';
import { ActivateCardResponse } from 'src/app/domain/models/response/ActivateCardResponse';
import { Card } from 'src/app/domain/models/response/Card';
import { ResponseBase } from 'src/app/domain/models/response/ResponseBase';
import { ActivateCardUseCase } from 'src/app/domain/use_cases/ActivateCardUseCase';
import { DeleteCardUseCase } from 'src/app/domain/use_cases/DeleteCardUseCase';
import { GetCardUseCase } from 'src/app/domain/use_cases/GetCardUseCase';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {

  public cardList: Array<Card>

  constructor(private getCardUseCase: GetCardUseCase,
    private activateCardUseCase: ActivateCardUseCase,
    private deleteCardUseCase: DeleteCardUseCase) {
    this.cardList = []
  }

  ngOnInit(): void {
    this.getAllCards()
  }

  getAllCards() {

    this.getCardUseCase.getAll()
      .then((response: ResponseBase<Array<Card>>) => {
        this.cardList = response.data
      }
      )
      .catch(Error => { })
  }

  activateCard(index:number) {
    
    let activateCardResquest = {
      hashId: this.cardList[index].hashId,
      validateNumber:"66"
    }
    this.activateCardUseCase.activateCard(activateCardResquest)
    .then((response:ResponseBase<ActivateCardResponse>)=>{this.getAllCards()})
    .catch(Error => { })
    
  }

  deleteCard(index:number) {
    
    console.log(this.cardList[index].hashId)

    this.deleteCardUseCase.DeleteCard(this.cardList[index].hashId)
    .then(
      (response:ResponseBase<Card>)=> {
        this.getAllCards()
      }
    )
    .catch(Error => { })

  }

  goToTransactionById(index:number) {

  }

}
