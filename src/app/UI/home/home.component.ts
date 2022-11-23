import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Infraestructure/helpers/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  
  constructor(private general:GeneralService){
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toCreateCard(){
    this.general.goTo("create-card")
  }

}
