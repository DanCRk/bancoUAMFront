import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/interfaces/menu/menu';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { ActividadService } from 'src/app/core/interceptores/actividad.service';
import { TokenService } from 'src/app/core/services/token/token-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu: Menu;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private tokenService: TokenService,
    private actividad: ActividadService
  ) {
    this.menu = menuService.menu;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') == null) {
      this.tokenService.getToken().subscribe({
        next: (e) => {
          sessionStorage.setItem('token', e.token);
          this.actividad.guardaActividad();
          this.actividad.validaActividad();
        },
        error: (e) => {},
      });
    }

    this.menuService.setDatosMenu(1);
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

  prueba() {
    console.log(this.menu.menus[1]);
  }
}
