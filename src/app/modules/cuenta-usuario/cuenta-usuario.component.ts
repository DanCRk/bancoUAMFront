import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/core/services/menu/menu.service';
import { UtilService } from 'src/app/core/services/util/util.service';

@Component({
  selector: 'app-cuenta-usuario',
  templateUrl: './cuenta-usuario.component.html',
  styleUrls: ['./cuenta-usuario.component.css']
})
export class CuentaUsuarioComponent implements OnInit{

  constructor(private util : UtilService,private router:Router,private menuService: MenuService) {}

  ngOnInit(): void {
    if(sessionStorage.getItem('idUser')==null){
      this.util.enviarAlerta('error',this.util.colorWarning,"Inicia sesion primero","No hay una sesion iniciada por favor intente en el login")
      this.router.navigateByUrl("inicio")
    }else{
      this.menuService.actualizatUsuario.emit("afsfgdsg")
      this.menuService.setDatosMenu(2)
    }
    
  }


}
