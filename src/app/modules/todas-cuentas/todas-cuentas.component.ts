import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';
import { InicioCuentaService } from 'src/app/core/services/inicioCuenta/iniciocuenta.service';

@Component({
  selector: 'app-todas-cuentas',
  templateUrl: './todas-cuentas.component.html',
  styleUrls: ['./todas-cuentas.component.css']
})
export class TodasCuentasComponent implements OnInit{

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
    this.router.navigateByUrl("/inicio/registro/"+url)
  }

}
