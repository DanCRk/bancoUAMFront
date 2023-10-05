import { Injectable, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/configService.service';
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
import { Login } from '../../interfaces/login/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlLogin = this.appProperties.config?.urlLogin;

  constructor(private appProperties: ConfigService, private http: HttpClient) {}

  sendLogin(
    noCuenta:string,
    password:string
  ) :Observable<Login> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + sessionStorage.getItem('token')
    );
    let params = new HttpParams();
    params = params.append('numero_cuenta', noCuenta);
    params = params.append('contraseña', password);
    return this.http.get<Login>(
      this.urlLogin!,
      {
        headers: headers,
        params: params,
      }
    );
  }
}
