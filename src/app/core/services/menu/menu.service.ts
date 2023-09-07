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
import { Menu } from '../../interfaces/menu/menu';
import { ApplicationProperties } from 'src/assets/application.properties';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  private properties = new ApplicationProperties()

  public urlMenu = this.properties.urlMenu

  menu:Menu = {
    menus:[]
  }

  constructor( private http: HttpClient) {}

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
        console.log(this.menu)
      },
      error: (e) => {
        console.log(e)
      },
    });
  }

}
