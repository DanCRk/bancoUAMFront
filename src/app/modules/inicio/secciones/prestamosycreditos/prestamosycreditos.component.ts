import { Component } from '@angular/core';

import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';
import { InicioCuentaService } from 'src/app/core/services/inicioCuenta/iniciocuenta.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-prestamosycreditos',
  templateUrl: './prestamosycreditos.component.html',
  styleUrls: ['./prestamosycreditos.component.css']
})
export class PrestamosycreditosComponent {



  constructor(private router:Router,private cuentaService:InicioCuentaService){
    
  }
  ngOnInit(): void {
    this.prestamos = this.cuentaService.prestamos
  }

  prestamos:Array<Cuenta> = [
    
  ]

  navegar(url:string){
    this.router.navigateByUrl("/inicio/login/"+url)
  }

}
