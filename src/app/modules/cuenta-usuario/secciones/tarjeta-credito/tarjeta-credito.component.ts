import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentaUsuario } from 'src/app/core/interfaces/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  usuario: CuentaUsuario;

  visible: boolean;

  constructor(
    private util: UtilService,
    private router: Router,
    private menuService: MenuService,
    private usuarioService: UsuarioService
  ) {
    this.usuario = usuarioService.usuarioss[0];
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
    }else{
      if(this.usuarioService.usuarioss==null){
        this.usuarioService.getUsuario(sessionStorage.getItem('idUser')).subscribe({
          next: (e) => {
            if (e.tarjetaCredito == null) {
              this.visible = false;
            } else {
              this.visible = true;
            }
            this.usuarioService.usuarioss.push(e);
            this.menuService.actualizatUsuario.emit(
              e.usuairo.nombre + ' ' + e.usuairo.apellido
            );
            this.usuario = this.usuarioService.usuarioss[0];
            let cadena = e.cuenta.numeroCuenta;
            let resultado = cadena.match(/.{1,4}/g);
            this.usuario.cuenta.numeroCuenta = resultado.join(' ');
          },
          error: (e) => {},
        });
      }else{
        this.usuario = this.usuarioService.usuarioss[0]
        if (this.usuario.tarjetaCredito == null) {
          this.visible = false;
        } else {
          this.visible = true;
        }
      }
      console.log(this.usuario.transacciones)
    }
  

    this.menuService.setDatosMenu(2);
  }

  navegar() {
    this.router.navigateByUrl('/cuenta/pagar/tarjetaCredito');
  }

  solicitaTarjetaCredito() {
    console.log(this.usuarioService.usuarioss)
    this.usuarioService
      .solicitaTarjetaCredito(
        this.usuarioService.usuarioss[0].usuairo.idUsuario
      )
      .subscribe({
        next: (e) => {
          this.util.enviarAlerta(
            'success',
            '#7fffc1',
            'Solicitado!',
            e.mensaje
          );
          this.usuarioService
            .getUsuario(sessionStorage.getItem('idUser'))
            .subscribe({
              next: (e) => {
                if (e.tarjetaCredito == null) {
                  this.visible = false;
                } else {
                  this.visible = true;
                }
                this.usuarioService.usuarioss.push(e);
                this.menuService.actualizatUsuario.emit(
                  e.usuairo.nombre + ' ' + e.usuairo.apellido
                );
                this.usuario = this.usuarioService.usuarioss[0];
                let cadena = e.cuenta.numeroCuenta;
                let resultado = cadena.match(/.{1,4}/g);
                this.usuario.cuenta.numeroCuenta = resultado.join(' ');
              },
              error: (e) => {},
            });
        },
        error: (e) => {},
      });
  }
}
