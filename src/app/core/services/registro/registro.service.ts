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
  providedIn: 'root',
})
export class RegistroService {
  private urlRegistro = this.appProperties.config?.urlRegistro;

  constructor(private appProperties: ConfigService, private http: HttpClient) {}

  sendRegistro(
    password: string,
    nombre: string,
    apellido: string,
    email: string,
    direccion: string,
    fechaNacimiento: string
  ): Observable<Login> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + sessionStorage.getItem('token')
    );
    let params = new HttpParams();
    params = params.append('nombre', nombre);
    params = params.append('apellido', apellido);
    params = params.append('correo', email);
    params = params.append('direccion', direccion);
    params = params.append('fechaNacimiento', fechaNacimiento);
    params = params.append('password', password);
    return this.http.get<Login>(
      this.urlRegistro!,
      {
        headers: headers,
        params: params,
      }
    );
  }
}
