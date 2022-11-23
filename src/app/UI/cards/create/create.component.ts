import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateCardRequest } from 'src/app/domain/models/request/CreateCardRequest';
import { createCardUseCase } from 'src/app/domain/use_cases/createCardUseCase';
import { GeneralService } from 'src/app/Infraestructure/helpers/general.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createCardForm = new FormGroup({ 
                                  pan: new FormControl('', Validators.compose([Validators.required,Validators.minLength(16),Validators.maxLength(19)])), 
                                  holder: new FormControl('', Validators.required), 
                                  id: new FormControl('', Validators.required), 
                                  cardType: new FormControl('', Validators.required), 
                                  phone: new FormControl('', Validators.required)
                                });

  constructor(private createCardUseCase: createCardUseCase,
    private general:GeneralService) {
  }


  ngOnInit(): void {
  }

  createCard(request:CreateCardRequest) {
    
    this.createCardUseCase.createCard(request)
      .then(
      )
      .catch(Error => { })
      
     console.log(this.createCardForm.value)
  }

  toListCards(){
    this.general.goTo("list-card")
  }

}
