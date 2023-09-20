import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  constructor(private registro: RegistroService, private util : UtilService
    ,private router:Router) {}

  

  password = '';
  nombre = '';
  apellido = '';
  email = '';
  direccion = '';
  fechaNacimiento = '';

  checkInputs():boolean{

    this.fechaNacimiento.replace('-','/')

    let pasa = true

    if(this.nombre.length <5){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo nombre invalido")
    }else if(this.apellido.length <5){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo apellido invalido")
    }else if(this.direccion.length <20){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo direccion invalido")
    }else if(!this.email.match(this.util.emailExp)){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo correo invalido")
    }else if(this.fechaNacimiento == ''){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo fecha invalido")
    }else if(!this.password.match(this.util.passwordRegex)){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo contraseña invalido")
    }

    return pasa
  }

  submitRegister() {
    console.log(this.fechaNacimiento)
    if(this.checkInputs()){
      this.registro
      .sendRegistro(
        this.password,
        this.nombre,
        this.apellido,
        this.email,
        this.direccion,
        this.fechaNacimiento
      )
      .subscribe({
        next: (e) => {
          if(e.acceso){
            sessionStorage.setItem('idUser',e.id_usuario.toString())
            this.router.navigateByUrl("cuenta/inicio")
          }
        },
        error: (e) => {
          this.util.enviarAlerta('warning','#ff8100','',e.error.mensaje)
        },
      });
    }
  }

  
}
