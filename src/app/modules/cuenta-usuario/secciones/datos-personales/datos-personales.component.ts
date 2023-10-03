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
  swal() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  }

  password = '**********';
  nombre = '';
  apellido = '';
  email = '';
  direccion = '';
  fechaNacimiento:Date 

  constructor(
    private service: UsuarioService,
    private util: UtilService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.nombre = this.service.usuarioss[0].usuairo.nombre
    this.apellido = this.service.usuarioss[0].usuairo.apellido
    this.email = this.service.usuarioss[0].usuairo.email
    this.direccion = this.service.usuarioss[0].usuairo.direccion
    this.fechaNacimiento = this.service.usuarioss[0].usuairo.fecha_nacimiento

  }
}
