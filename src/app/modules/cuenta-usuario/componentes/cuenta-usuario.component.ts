import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  CuentaUsuario,
  Prestamo,
} from 'src/app/core/interfaces/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { UtilService } from 'src/app/core/services/util/util.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cuenta-usuario',
  templateUrl: './cuenta-usuario.component.html',
  styleUrls: ['./cuenta-usuario.component.css'],
})
export class CuentaUsuarioComponent implements OnInit {
  usuario: CuentaUsuario;

  p: number = 1;

  copy: boolean;

  respuesta: string;

  constructor(
    private util: UtilService,
    private router: Router,
    private menuService: MenuService,
    private usuarioService: UsuarioService
  ) {
    this.usuario = usuarioService.usuarioss[0]
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('idUser') == null) {
      this.util
        .enviarAlerta(
          'error',
          this.util.colorWarning,
          'Inicia sesion primero',
          'No hay una sesion iniciada por favor intente en el login'
        )
        .then(() => {
          this.router.navigateByUrl('inicio');
        });
    } else {
      if(this.usuarioService.usuarioss[0]==null){
        this.usuarioService
        .getUsuario(sessionStorage.getItem('idUser'))
        .subscribe({
          next: (e) => {
            this.usuarioService.usuarioss.push(e);
            this.menuService.actualizatUsuario.emit(
              e.usuairo.nombre + ' ' + e.usuairo.apellido
            );
            this.usuario = this.usuarioService.usuarioss[0];
            let cadena = e.cuenta.numeroCuenta;
            let resultado = cadena.match(/.{1,4}/g);
            this.usuario.cuenta.numeroCuenta = resultado.join(' ');
            if(this.usuario.tarjetaCredito!=null){
              let cadena2 = this.usuario.tarjetaCredito?.numero_tarjeta;
            this.usuario.tarjetaCredito.numero_tarjeta = cadena2
              .match(/.{1,4}/g)
              .join(' ');
            }

          },
          error: (e) => {},
        });
      }else{
        this.usuario = this.usuarioService.usuarioss[0]
      }
    }
    this.menuService.setDatosMenu(2);
  }

  copiar(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copy = true;
    setTimeout(() => {
      this.copy = false;
    }, 2000);
  }
}
