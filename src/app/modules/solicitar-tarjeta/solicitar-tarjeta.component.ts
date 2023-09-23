import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { UtilService } from 'src/app/core/services/util/util.service';
import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';
import { InicioCuentaService } from 'src/app/core/services/inicioCuenta/iniciocuenta.service';

@Component({
  selector: 'app-solicitar-tarjeta',
  templateUrl: './solicitar-tarjeta.component.html',
  styleUrls: ['./solicitar-tarjeta.component.css']
})
export class SolicitarTarjetaComponent {

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
