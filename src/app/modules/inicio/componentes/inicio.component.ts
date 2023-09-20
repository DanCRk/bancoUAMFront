import { Component, OnInit } from '@angular/core';
import { ActividadService } from 'src/app/core/interceptores/actividad.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { TokenService } from 'src/app/core/services/token/token-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit{

  constructor(
    private menuService: MenuService,
  ) {
  }

  ngOnInit(): void {
    this.menuService.setDatosMenu(1)
    sessionStorage.clear()
  }
}
