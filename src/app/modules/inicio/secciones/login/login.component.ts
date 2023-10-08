import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { RegistroService } from 'src/app/core/services/registro/registro.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  password = '';
  numeroCuenta = '';
  tipo = 1

  constructor(
    private login: LoginService,
    private util: UtilService,
    private router: Router,
    private route:ActivatedRoute
  ) {}
  ngOnInit() {
    this.tipo = this.route.snapshot.params['tipo']

  }

  checkInputs(): boolean {
    let pasa = true;

    if (this.numeroCuenta.length < 18 && !this.numeroCuenta.match(this.util.emailExp)) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'Formato en el campo numero de cuenta o correo invalido'
      );
    }else if (!this.password.match(this.util.passwordRegex)) {
      pasa = false;
      this.util.enviarAlerta(
        'warning',
        this.util.colorWarning,
        'Error en el formulario',
        'Formato en el campo contraseña invalido'
      );
    }

    return pasa;
  }

  submitLogin() {
    if (this.checkInputs()) {
      this.login.sendLogin(this.numeroCuenta, this.password).subscribe({
        next: (e) => {
          if (e.acceso) {
            sessionStorage.setItem('idUser', e.id_usuario.toString());
            if(this.tipo==3){
              this.router.navigateByUrl('cuenta/prestamos');
            }else if (this.tipo==2){
              this.router.navigateByUrl('cuenta/tarjetaCredito');
            }else{
              this.router.navigateByUrl('cuenta/inicio');
            }
          }
        },
        error: (e) => {
          if(e.error!=null){
            this.util.enviarAlerta('warning', '#ff8100', '', e.error.mensaje);
          }
        },
      });
    }
  }
}
