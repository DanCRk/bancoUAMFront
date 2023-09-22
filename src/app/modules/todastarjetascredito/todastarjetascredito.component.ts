import { Component } from '@angular/core';
import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';
import { InicioCuentaService } from 'src/app/core/services/inicioCuenta/iniciocuenta.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todastarjetascredito',
  templateUrl: './todastarjetascredito.component.html',
  styleUrls: ['./todastarjetascredito.component.css']
})
export class TodastarjetascreditoComponent {

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
