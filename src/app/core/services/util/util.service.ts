import { Injectable, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  passwordRegex =
    '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$';
  textoPlanoExp = '^[A-Za-z][A-Za-z]{3,29}$';

  numeroCuentaExp = '^\\d$';

  emailExp = '^[^@]+@[^@]+.[a-zA-Z]{2,}$';

  fechaformatoExp =
    '^([0-2][0-9]||3[0-1])/(0[0-9]||1[0-2])/([0-9][0-9])?[0-9][0-9]$';

  colorWarning = '';

  enviarAlerta(icono: any, iconColor: string, titulo: string, text: string) {
    return Swal.fire({
      position: 'center',
      icon: icono,
      iconColor: iconColor,
      titleText: titulo,
      text: text,
      showConfirmButton: true, //cambio meno, true
    });
  }

  enviarAlertaConfirmacion(){
    return Swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText:"Cancelar"
    })
  }
}
