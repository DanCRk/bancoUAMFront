import { Injectable, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/config.service';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Token } from '../../interfaces/token/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private urlToken = this.appProperties.config?.urlToken

  private user:string = this.appProperties.config.user

  private pass:string = this.appProperties.config.pass

  token:Token = {
    timeout:'',
    token:'',
    usuario:''
  }

  constructor(private appProperties: ConfigService, private http: HttpClient) {}

  getToken(
  ): Observable<Token> {
    let headers = new HttpHeaders();
    headers = headers.append(
      this.user,
      this.pass
    );
    let params = new HttpParams();
    return this.http.get<Token>(
      this.urlToken!,
      {
        headers: headers,
        params: params,
      }
    );
  }
}
