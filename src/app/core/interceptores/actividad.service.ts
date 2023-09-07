import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Idle } from 'idlejs';


@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private route:Router) {}

  urlsis = "inicio"

  guardaActividad() {
    const idle = new Idle()
      .whenNotInteractive()
      .within(5, 1000)
      .do(() => {
        console.log('## ACTIVIDAD ## Fecha actividad: ', new Date());
        sessionStorage.setItem('lastActivity', new Date().getTime().toString());
      })
      .start();
  }

  validaActividad() {
    const LIMIT = 60000 * 2; //6 minutos

    setInterval(() => {
      const f = sessionStorage.getItem('lastActivity');
      let fech = new Date(+f!);
      // console.log('fecha 2: ', fech);
      // console.log('If: ', new Date().getTime() - fech.getTime() > LIMIT);
      // console.log('Minutos:', new Date().getTime() - fech.getTime());
      if (new Date().getTime() - fech.getTime() > LIMIT) {
        sessionStorage.removeItem('lastActivity');
        sessionStorage.clear();
        console.log('Cerrar sesion');
        const nuevaVentana = window.open(this.urlsis, '_self');
      }
    }, 60000); //comprobar cada minuto
  }
}
