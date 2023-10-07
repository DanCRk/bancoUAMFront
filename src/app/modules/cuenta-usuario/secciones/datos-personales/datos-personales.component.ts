import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/inicioCuenta/usuario.service';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { UtilService } from 'src/app/core/services/util/util.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css'],
})
export class DatosPersonalesComponent implements OnInit {

  password = '';
  password2 = '';
  nombre = '';
  apellido = '';
  email = '';
  direccion = '';
  fechaNacimiento:Date 
  idUsuario=''

  constructor(
    private service: UsuarioService,
    private util: UtilService,
    private router: Router
  ) {}
  ngOnInit(): void {

    if (sessionStorage.getItem('idUser') == null) {
      this.util.enviarAlerta(
        'error',
        this.util.colorWarning,
        'Inicia sesion primero',
        'No hay una sesion iniciada por favor intente en el login'
      ).then(()=>{
        this.router.navigateByUrl('inicio');
      });
    }

    this.nombre = this.service.usuarioss[0]?.usuairo.nombre
    this.apellido = this.service.usuarioss[0]?.usuairo.apellido
    this.email = this.service.usuarioss[0]?.usuairo.email
    this.direccion = this.service.usuarioss[0]?.usuairo.direccion
    this.fechaNacimiento = this.service.usuarioss[0]?.usuairo.fecha_nacimiento
      
  }

  actualizarUsuario(){
    if(this.password==''){
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "La contraseña esta vacia")
      return
    }
    if(!this.password.match(this.util.passwordRegex)){
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo contraseña invalido")
    }

    if(this.password!=this.password2 || this.password==''){
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Las contraseñas no coinciden")
      return
    }

    this.service.usuarioss[0].usuairo.nombre = this.nombre
    this.service.usuarioss[0].usuairo.apellido = this.apellido
    this.service.usuarioss[0].usuairo.direccion = this.direccion
    this.service.usuarioss[0].usuairo.email = this.email
    this.service.usuarioss[0].usuairo.password = this.password

    this.service.updateUsuario(this.service.usuarioss[0].usuairo).subscribe({
      next: (e) => {
        this.service.usuarioss[0].usuairo.nombre = this.nombre
        this.service.usuarioss[0].usuairo.apellido = this.apellido
        this.util.enviarAlerta('success', '#7fffc1', "Actualizado!", e.mensaje);
      },
      error: (e) => {
        console.log(e)
        this.util.enviarAlerta('warning', '#ff8100', 'Advertencia!', e.error.mensaje);
      },
    }); 
  }

  borrarUsuario( ){
    this.util.enviarAlertaConfirmacion().then((result) => {
      if (result.isConfirmed) {
        this.service.deleteUsuario(this.service.usuarioss[0].usuairo.idUsuario).subscribe({
          next: (e) => {
            if(e.estatus==200){
              Swal.fire(
                'Borrada!',
                'Tu cuenta ha sido borrada.',
                'success'
              ).then(()=>{
                  this.router.navigateByUrl('inicio')
                  sessionStorage.removeItem('idUser')
              })
            }else{
              Swal.fire(
                'Error!',
                e.mensaje,
                'error'
              )
            }
          },
          error: (e) => {
            this.util.enviarAlerta('warning', '#ff8100', 'Error!', e.error.mensaje);
          },
        });
      }
    })

  }
}
