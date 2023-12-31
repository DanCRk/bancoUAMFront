import { Component } from '@angular/core';
import { Transaccion } from 'src/app/core/interfaces/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css'],
})
export class TransferirComponent {
  monto: number=0;
  cuenta_destinataria: string='';
  concepto: string='';
  descripcion: string='';

  constructor(private util: UtilService, private usuario: UsuarioService) {}

  checkInputs(): boolean {
    let pasa = true;

    if (this.cuenta_destinataria.length < 19) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'Formato en el campo cuenta destinataria invalido'
      );
    } else if (this.monto <= 0) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'El monto no puede ser menor a 0'
      );
    } else if (this.concepto.length <= 0) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'Formato en el campo direccion concepto no puede ser vacio'
      );
    } else if (this.descripcion.length <= 0) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'Formato en el campo direccion descripcion no puede ser vacio'
      );
    }

    return pasa;
  }

  transferir() {
    if (this.checkInputs()) {
      let transaccion: Transaccion = {
        isAdd: 0,
        concepto: this.concepto,
        cuenta_destinatario: this.cuenta_destinataria,
        cuenta_remitente: this.usuario.usuarioss[0].cuenta.numeroCuenta.replace(
          ' ',
          ''
        ),
        descripcion: this.descripcion,
        fecha_transaccion: null,
        id_transaccion: null,
        monto: this.monto,
        nombre_destinatario: null,
        nombre_remitente: null,
        tipo: 1,
      };
      console.log(transaccion);
      this.usuario.sendTransaccion(transaccion).subscribe({
        next: (e) => {
          this.util.enviarAlerta('success', '#7fffc1', 'Exito!', e.mensaje);
          this.usuario.getUsuario(sessionStorage.getItem('idUser')).subscribe({
            next: (e) => {
              this.usuario.usuarioss.push(e);
              let cadena = e.cuenta.numeroCuenta;
              let resultado = cadena.match(/.{1,4}/g);
              this.usuario.usuarioss[0].cuenta.numeroCuenta =
                resultado.join(' ');

              if (e.tarjetaCredito != null) {
                let cadena2 = e.tarjetaCredito?.numero_tarjeta;
                this.usuario.usuarioss[0].tarjetaCredito.numero_tarjeta =
                  cadena2.match(/.{1,4}/g).join(' ');
              }
            },
            error: (e) => {},
          });
        },
        error: (e) => {
          this.util.enviarAlerta('warning', '#ff8100', '', e.error.mensaje);
        },
      });
    }
  }
}
