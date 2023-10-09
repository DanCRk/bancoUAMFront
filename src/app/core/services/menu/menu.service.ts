import { Injectable, EventEmitter } from '@angular/core';
import { ConfigService } from '../config/configService.service';
import { Menu } from '../../interfaces/menu/menu';
import { UsuarioService } from '../inicioCuenta/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  actualizatBotonesDerecha = new EventEmitter<number>();
  actualizatUsuario = new EventEmitter<string>();

  usuario: string;

  private urlMenu = this.appProperties.config?.urlMenu;

  menu: Menu = {
    menus: [],
  };

  constructor(private appProperties: ConfigService,private usuarioService:UsuarioService) {}

  setDatosMenu(categoria: number) {
    
    this.actualizatBotonesDerecha.emit(categoria);
    if (categoria == 1) {
      this.usuarioService.usuarioss.pop()
      this.menu.menus = [
        {
          titulo: 'CUENTA',
          url: 'inicio/cuenta',
          submenus: [
            {
              titulo: 'Cuentas de debito',
              url: 'inicio/cuenta/todas',
              subsubmenus: null,
            },
          ],
        },
        {
          titulo: 'PRESTAMOS',
          url: 'inicio/prestamo',
          submenus: [
            {
              titulo: 'Creditos y prestamos',
              url: 'inicio/prestamos/creditos',
              subsubmenus: null,
            },
            {
              titulo: 'Prestamos personales',
              url: 'inicio/prestamos/prestamos',
              subsubmenus: null,
            },
          ],
        },
        {
          titulo: 'TARJETAS DE CREDITO',
          url: 'inicio/tarjetascredito',
          submenus: [
            {
              titulo: 'Todas las tarjetas',
              url: 'inicio/tarjetascredito/todas',
              subsubmenus: null,
            },
          ],
        },
      ];
    } else {
      this.menu.menus = [
        {
          titulo: 'INICIO',
          url: 'cuenta/inicio',
          submenus: [
            {
              titulo: 'Tu cuenta',
              url: 'cuenta/inicio',
              subsubmenus: null,
            },
            {
              titulo: 'Tu Tarjeta Credito',
              url: 'cuenta/tarjetaCredito',
              subsubmenus: null,
            },
            {
              titulo: 'Tu Prestamo',
              url: 'cuenta/prestamos',
              subsubmenus: null,
            },
          ],
        },
        {
          titulo: 'TRANSFERIR',
          url: 'cuenta/transferir',
          submenus: [
            {
              titulo: 'A cuentas BBUAM',
              url: 'cuenta/transferir/acuentasbbuam',
              subsubmenus: null,
            },
          ],
        },
        {
          titulo: 'PAGAR',
          url: 'cuenta/pagar',
          submenus: [
            {
              titulo: 'A tarjeta de credito',
              url: 'cuenta/pagar/tarjetaCredito',
              subsubmenus: null,
            },
            {
              titulo: 'A prestamos BBUAM',
              url: 'cuenta/pagar/prestamos',
              subsubmenus: null,
            },
          ],
        },
        {
          titulo: 'ADMINISTRAR',
          url: 'cuenta/administrar',
          submenus: [
            {
              titulo: 'Datos personales',
              url: 'cuenta/administrar/personales',
              subsubmenus: null,
            },
          ],
        },
      ];
    }
  }
}
