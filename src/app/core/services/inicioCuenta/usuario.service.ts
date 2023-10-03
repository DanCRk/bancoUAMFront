import { Injectable, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/iniciocuenta.service';
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
import { CuentaUsuario } from '../../interfaces/usuario/usuario';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlUsuario = this.appProperties.config?.urlUsuario;
  private urlBorrarUsuario = this.appProperties.config?.urlBorrarUsuario;
  private urlEditarUsuario = this.appProperties.config?.urlEditarUsuario;

  constructor(private appProperties: ConfigService, private http: HttpClient) {this.usuarioss = []}

  usuario: CuentaUsuario 

  usuarioss:Array<CuentaUsuario>

  getUsuario(idUsuario: string): Observable<CuentaUsuario> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + sessionStorage.getItem('token')
    );
    let params = new HttpParams();
    params = params.append('id_usuario', idUsuario);
    return this.http.get<CuentaUsuario>(this.urlUsuario!, {
      headers: headers,
      params: params,
    });
  }
}
