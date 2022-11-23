import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private _configuracionGlobalService:ConfigurationService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = (request.url.includes('http') || request.url.includes('assets')) ? request : request.clone({
      url: this._configuracionGlobalService.getUrlBackend() + request.url
    });
    return next.handle(request);
  }
}
