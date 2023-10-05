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
import { CuentaUsuario, Usuario } from '../../interfaces/usuario/usuario';
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

  updateUsuario(usuario: Usuario): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append('id_usuario', usuario.idUsuario);
    params = params.append('nombre', usuario.nombre);
    params = params.append('apellido', usuario.apellido);
    params = params.append('direccion', usuario.direccion);
    params = params.append('correo', usuario.email);
    params = params.append('password', usuario.password);
    return this.http.get<any>(this.urlEditarUsuario!, {
      headers: headers,
      params: params,
    });
  }

  

  deleteUsuario(idUsuario: number): Observable<any> {
    let headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append('id_usuario', idUsuario);
    return this.http.delete<any>(this.urlBorrarUsuario!, {
      headers: headers,
      params: params,
    });
  }
}
