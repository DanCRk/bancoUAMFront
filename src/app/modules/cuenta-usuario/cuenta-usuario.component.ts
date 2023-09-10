import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/interfaces/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-cuenta-usuario',
  templateUrl: './cuenta-usuario.component.html',
  styleUrls: ['./cuenta-usuario.component.css'],
})
export class CuentaUsuarioComponent implements OnInit {
  usuario: Usuario;

  constructor(
    private util: UtilService,
    private router: Router,
    private menuService: MenuService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuario = this.usuarioService.usuario;
    if (sessionStorage.getItem('idUser') == null) {
      this.util.enviarAlerta(
        'error',
        this.util.colorWarning,
        'Inicia sesion primero',
        'No hay una sesion iniciada por favor intente en el login'
      );
      this.router.navigateByUrl('inicio');
    }
    this.usuarioService.getUsuario(sessionStorage.getItem('idUser')).subscribe({
      next: (e) => {
        this.usuario.apellido = e.apellido;
        this.usuario.direccion = e.direccion;
        this.usuario.email = e.email;
        this.usuario.fecha_nacimiento = e.fecha_nacimiento;
        this.usuario.fecha_ultimo_acceso = e.fecha_ultimo_acceso;
        this.usuario.idUsuario = e.idUsuario;
        this.usuario.nombre = e.nombre;
        let cadena = e.numeroCuenta;
        let resultado = cadena.match(/.{1,4}/g); 
        this.usuario.numeroCuenta = resultado.join(" ");
        this.usuario.saldo = e.saldo
        this.menuService.actualizatUsuario.emit(this.usuario.nombre +" "+ this.usuario.apellido);
      },
      error: (e) => {},
    });
    this.menuService.setDatosMenu(2);
    
  }
}
