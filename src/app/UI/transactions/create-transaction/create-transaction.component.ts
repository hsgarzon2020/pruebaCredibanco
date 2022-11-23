import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateTransactionRequest } from 'src/app/domain/models/request/CreateTransactionRequest';
import { createTransactionUseCase } from 'src/app/domain/use_cases/CreateTransactionUseCase';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  createTransactionForm = new FormGroup({
    hashId: new FormControl('', Validators.required),
    referenceNumber: new FormControl('', Validators.required),
    totalPurchase: new FormControl('', Validators.required),
    addressPurchase: new FormControl('', Validators.required)
  });

  constructor(private createTransactionUseCase: createTransactionUseCase) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createTransaction(request:CreateTransactionRequest) {
    
    this.createTransactionUseCase.createTransaction(request)
      .then()
      .catch(Error => { })
      
     console.log(this.createTransactionForm.value)
  }


}
