import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

import { finalize } from 'rxjs/operators';
import { CharactersService } from './characters.service';
@Injectable({
  providedIn: 'root',
})
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private _loader: CharactersService) {}

  // Displaying the loader on every API call 
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this._loader.show();
    return next.handle(req).pipe(finalize(() => this._loader.hide()));
  }
}
