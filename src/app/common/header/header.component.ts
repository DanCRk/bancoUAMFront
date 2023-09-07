import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/interfaces/menu/menu';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
  menu:Menu

  constructor(private menuService: MenuService,private router:Router) {
    this.menu = menuService.menu;
  }

  ngOnInit(): void {
  }

  showMenu = (toggleId: string, navId: string) => {
    const toggle = document.getElementById(toggleId)!,
      nav = document.getElementById(navId)!;

    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      toggle.classList.toggle('show-icon');
    });
  };

  navegar(url:string){
    this.router.navigateByUrl(url)
  }

  prueba(){
    console.log(this.menu.menus[1])
  }
}
