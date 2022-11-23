import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private _frontUrl: string;
  private _backUrl: string;

  constructor() {

    this._frontUrl = "http://localhost:4200/";
    this._backUrl = "http://localhost:8080/";

  }

  getUrlBackend() {
    return this._backUrl;
  }

  getUrlFrontend() {
    return this._frontUrl;
  }

}
