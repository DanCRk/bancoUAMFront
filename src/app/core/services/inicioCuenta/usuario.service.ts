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
import { Usuario } from '../../interfaces/usuario/usuario';
@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private urlUsuario = this.appProperties.config?.urlUsuario;

  constructor(private appProperties: ConfigService, private http: HttpClient) {}

  usuario: Usuario = {
    apellido: '',
    direccion: '',
    email: '',
    fecha_nacimiento: '',
    fecha_ultimo_acceso: '',
    idUsuario: 0,
    nombre: '',
    numeroCuenta:'',
    saldo:'',
    numeroTarjetaCredito:'',
    fechaCorte:'',
    fechaVencimientoCredito:'',
    limiteCredito:'',
    saldoActual:'',
  };

  getUsuario(idUsuario: string): Observable<Usuario> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + sessionStorage.getItem('token')
    );
    let params = new HttpParams();
    params = params.append('id_usuario', idUsuario);
    return this.http.get<Usuario>(this.urlUsuario!, {
      headers: headers,
      params: params,
    });
  }
}
