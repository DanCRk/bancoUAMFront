import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActividadService } from 'src/app/core/interceptores/actividad.service';
import { LoginService } from 'src/app/core/services/login/login.service';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   password = ''
   numeroCuenta= ''

   constructor(private login: LoginService, private util : UtilService,private router:Router,private actividad:ActividadService) {}

   checkInputs():boolean{

    let pasa = true

    if(this.numeroCuenta.length < 18){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo numero de cuenta invalido")
    }else if(!this.password.match(this.util.passwordRegex)){
      pasa=false
      this.util.enviarAlerta('warning',this.util.colorWarning,"Error en el formulario", "Formato en el campo contraseña invalido")
    }

    return pasa
  }

  submitLogin() {
    if(this.checkInputs()){
      this.login
      .sendLogin(
        this.numeroCuenta,
        this.password
      )
      .subscribe({
        next: (e) => {
          if(e.acceso){
            this.actividad.guardaActividad()
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

