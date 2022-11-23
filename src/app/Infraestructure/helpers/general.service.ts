import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private _router: Router) { }
  goTo(ruta: string): void {
    this._router.navigate(['/'+ruta]);
  }
}
