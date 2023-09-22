import { Component } from '@angular/core';

import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';
import { InicioCuentaService } from 'src/app/core/services/inicioCuenta/iniciocuenta.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prestamosycreditos',
  templateUrl: './prestamosycreditos.component.html',
  styleUrls: ['./prestamosycreditos.component.css']
})
export class PrestamosycreditosComponent {



  constructor(private router:Router,private route:ActivatedRoute,private cuentaService:InicioCuentaService){
    
  }
  ngOnInit(): void {
    let i = this.route.snapshot.params['tipo']
    console.log(i)
    this.cuentas = this.cuentaService.cuentas
  }

  cuentas:Array<Cuenta> = [
    
  ]

  navegar(url:string){
    this.router.navigateByUrl("/inicio/registro")
  }

}
