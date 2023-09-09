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
import { Menu } from '../../interfaces/menu/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  public urlMenu = this.appProperties.config?.urlMenu;

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
    this.menu.menus.length = 0
    this.getMenu(categoria).subscribe({
      next: (e) => {
        this.menu.menus.push(...e.menus)
      },
      error: (e) => {
        
      },
    });
  }

}
