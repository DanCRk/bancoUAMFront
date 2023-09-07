import { Component } from '@angular/core';
import { Menu } from 'src/app/core/interfaces/menu/menu';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menu:Menu ;

  constructor(private menuService: MenuService) {
    this.menu = menuService.menu;
  }

  showMenu = (toggleId: string, navId: string) => {
    const toggle = document.getElementById(toggleId)!,
      nav = document.getElementById(navId)!;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    });
  };
}
