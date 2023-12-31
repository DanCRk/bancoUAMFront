import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/interfaces/menu/menu';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { TokenService } from 'src/app/core/services/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu: Menu;

  loginOrcuenta = false;

  nombre = '';

  constructor(
    private menuService: MenuService,
    private router: Router,
    private tokenService: TokenService
  ) {
    this.menu = menuService.menu;
  }

  ngOnInit(): void {
    this.menuService.setDatosMenu(1);

    this.menuService.actualizatBotonesDerecha.subscribe((e) => {
      if (e == 1) {
        this.loginOrcuenta = false;
      }
      if (e == 2) {
        this.loginOrcuenta = true;
      }
    });

    this.tokenService.getToken().subscribe({
      next: (e) => {
        sessionStorage.setItem('token',e.token)
      },
      error: (e) => {

      },
    });

    this.menuService.actualizatUsuario.subscribe((e) => {
      this.nombre = e;
    });
  }

  showMenu = (toggleId: string, navId: string) => {
    const toggle = document.getElementById(toggleId)!,
      nav = document.getElementById(navId)!;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    });
  };

  navegar(url: string) {
    this.router.navigateByUrl(url);
  }

  clearSesion() {
    sessionStorage.removeItem('idUser');
  }
}
