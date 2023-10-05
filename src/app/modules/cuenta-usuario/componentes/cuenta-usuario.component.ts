import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaUsuario, Prestamo } from 'src/app/core/interfaces/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-cuenta-usuario',
  templateUrl: './cuenta-usuario.component.html',
  styleUrls: ['./cuenta-usuario.component.css'],
})
export class CuentaUsuarioComponent implements OnInit {
  usuario: CuentaUsuario


  constructor(
    private util: UtilService,
    private router: Router,
    private menuService: MenuService,
    private usuarioService: UsuarioService
  ) {

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
    }
    this.usuarioService.getUsuario(sessionStorage.getItem('idUser')).subscribe({
      next: (e) => {
        this.menuService.actualizatUsuario.emit(
          e.usuairo.nombre + ' ' + e.usuairo.apellido
        );
        this.usuario = e;
        let cadena = e.cuenta.numeroCuenta;
        let resultado = cadena.match(/.{1,4}/g);
        this.usuario.cuenta.numeroCuenta = resultado.join(' ');
        cadena = this.usuario.tarjetaCredito.numero_tarjeta;
        this.usuario.tarjetaCredito.numero_tarjeta = cadena
          .match(/.{1,4}/g)
          .join(' ');

        this.usuarioService.usuarioss.push(e);
      },
      error: (e) => {},
    });
    this.menuService.setDatosMenu(2);
  }
}
