import { Injectable, EventEmitter } from '@angular/core';
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
import { ApplicationProperties } from 'src/assets/application.properties';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private properties = new ApplicationProperties()

  private urlToken = this.properties.urlToken

  private user:string = this.properties.user

  private pass:string = this.properties.pass

  token:Token = {
    timeout:'',
    token:'',
    usuario:''
  }

  constructor(private http: HttpClient) {}

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
