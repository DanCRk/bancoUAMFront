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

  constructor(private tokenService: TokenService,private actividad:ActividadService,
    private menu:MenuService) {
    
  }
  ngOnInit(): void {
    this.tokenService.getToken().subscribe({
      next: (e) => {
        sessionStorage.setItem('token',e.token)
        this.actividad.guardaActividad();
        this.actividad.validaActividad();
      },
      error: (e) => {
        
      },
    });

    this.menu.setDatosMenu(2)
  }
}
