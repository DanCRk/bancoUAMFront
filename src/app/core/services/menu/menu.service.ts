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
import { Menu } from '../../interfaces/menu/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  actualizatBotonesDerecha = new EventEmitter<number>();
  actualizatUsuario = new EventEmitter<string>();

  usuario:string

  private urlMenu = this.appProperties.config?.urlMenu;

  menu:Menu = {
    menus:[]
  }

  constructor(private appProperties: ConfigService, private http: HttpClient) {}

  getMenu(
    categoria: number
  ): Observable<Menu> {
    let headers = new HttpHeaders();
    headers = headers.append(
      'Authorization',
      'Bearer ' + sessionStorage.getItem('token')
    );
    let params = new HttpParams();
    params = params.append('categoria', categoria);
    return this.http.get<Menu>(
      this.urlMenu!,
      {
        headers: headers,
        params: params,
      }
    );
  }

  setDatosMenu(categoria: number) {
    // this.getMenu(categoria).subscribe({
    //   next: (e) => {
    //     this.actualizatBotonesDerecha.emit(categoria)
    //     this.menu.menus.length = 0
    //     this.menu.menus.push(...e.menus)
    //   },
    //   error: (e) => {
        
    //   },
    // });
    this.actualizatBotonesDerecha.emit(categoria)
   if(categoria==1){
    
    this.menu.menus =[
      {
          "titulo": "CUENTA",
          "url": "inicio/cuenta",
          "submenus": [
              {
                  "titulo": "Cuentas de debito",
                  "url": "inicio/cuenta/todas",
                  "subsubmenus": null
              }
          ]
      },
      {
          "titulo": "PRESTAMOS",
          "url": "inicio/prestamo",
          "submenus": [
              {
                  "titulo": "Creditos y prestamos",
                  "url": "inicio/prestamos/creditos",
                  "subsubmenus": null
              },
              {
                  "titulo": "Prestamos personales",
                  "url": "inicio/prestamos/prestamos",
                  "subsubmenus": null
              }
          ]
      },
      {
          "titulo": "TARJETAS DE CREDITO",
          "url": "inicio/tarjetascredito",
          "submenus": [
              {
                  "titulo": "Todas las tarjetas",
                  "url": "inicio/tarjetascredito/todas",
                  "subsubmenus": null
              }
          ]
      }
  ]
   }else{
    this.menu.menus= [
      {
          "titulo": "INICIO",
          "url": "cuenta/inicio",
          "submenus": [
              {
                  "titulo": "Tu cuenta",
                  "url": "cuenta/inicio",
                  "subsubmenus": null
              }
          ]
      },
      {
          "titulo": "TRANSFERIR",
          "url": "cuenta/transferir",
          "submenus": [
              {
                  "titulo": "A cuentas BBUAM",
                  "url": "cuenta/transferir/acuentasbbuam",
                  "subsubmenus": null
              }
          ]
      },
      {
          "titulo": "PAGAR",
          "url": "cuenta/pagar",
          "submenus": [
              {
                  "titulo": "A cuentas BBUAM",
                  "url": "cuenta/pagar/acuentasbbuam",
                  "subsubmenus": null
              },
              {
                  "titulo": "A tarjeta de credito",
                  "url": "cuenta/pagar/tarjetacredito",
                  "subsubmenus": null
              }
          ]
      },
      {
          "titulo": "ADMINISTRAR",
          "url": "cuenta/administrar",
          "submenus": [
              {
                  "titulo": "Datos personales",
                  "url": "cuenta/administrar/personales",
                  "subsubmenus": null
              }
          ]
      }
  ]
   }
  }

}
