import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cuenta } from 'src/app/core/interfaces/cuentas/cuentas';

@Component({
  selector: 'app-todas-cuentas',
  templateUrl: './todas-cuentas.component.html',
  styleUrls: ['./todas-cuentas.component.css']
})
export class TodasCuentasComponent implements OnInit{

  constructor(private router:Router,private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    let i = this.route.snapshot.params['tipo']
    console.log(i)
  }

  cuentas:Array<Cuenta> = [
    {
      imagen:"https://tubalboaconsentido.gob.pa/wp-content/uploads/2022/05/banca_en_linea-1024x583.jpeg",
      titulo:"Cuenta Basica",
      tipo:'1',
      puntos:[
        "La cuenta segura y accesible para administrar tu dinero",
        "Realiza transferencias con BBUAM México",
        "Consulta tu saldo en BBUAM México sin costo"
      ]
    }
  ]

  navegar(url:string){
    this.router.navigateByUrl("/inicio/cuenta/solicita/"+url)
  }

}
