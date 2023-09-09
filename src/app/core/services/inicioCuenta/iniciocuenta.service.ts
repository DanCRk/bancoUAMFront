import { Injectable } from '@angular/core';
import { Cuenta } from '../../interfaces/cuentas/cuentas';

@Injectable({
  providedIn: 'root',
})
export class InicioCuentaService {


  cuentas:Array<Cuenta> = [{
    imagen:"https://tubalboaconsentido.gob.pa/wp-content/uploads/2022/05/banca_en_linea-1024x583.jpeg",
    titulo:"Cuenta Basica",
    tipo:'1',
    puntos:[
      "La cuenta segura y accesible para administrar tu dinero",
      "Realiza transferencias con BBUAM México",
      "Consulta tu saldo en BBUAM México sin costo"
    ]
  }]



}
