import { Injectable } from '@angular/core';
import { Menu } from '../../interfaces/menu/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu:Menu = {
    menues: [
      {
        titulo: 'INICIO',
        url: 'cuenta/inicio',
      },
      {
        titulo: 'TRANSFERIR',
        url: 'cuenta/transferir',
        submenu:[
          {
            titulo: 'A cuentas BBUAM',
            url: 'cuenta/transferir/acuentasbbuam',
          }
        ]
      },
      {
        titulo: 'PAGAR',
        url: 'cuenta/pagar',
        submenu:[
          {
            titulo: 'A cuentas BBUAM',
            url: 'cuenta/pagar/acuentasbbuam',
          },
          {
            titulo: 'A tarjeta de credito',
            url: 'cuenta/pagar/tarjetacredito',
          }
        ]
      },
      {
        titulo: 'ADMINISTRAR',
        url: 'cuenta/administrar',
        submenu:[
          {
            titulo: 'Datos de contacto',
            url: 'cuenta/administrar/datoscontacto',
          },
          {
            titulo: 'Datos de seguridad',
            url: 'cuenta/administrar/datosseguridad',
            subsubmenu:[
              {
                titulo: 'Datos de seguridad',
                url: 'cuenta/administrar/datosseguridad',
              }
            ]
          }
        ]
      },
    ],
  };

  constructor() {}
}
