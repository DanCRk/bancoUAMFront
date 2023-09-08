import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/componentes/login.component';
import { InicioComponent } from './modules/inicio/componentes/inicio.component';
import { PaginaNoEncontradaComponent } from './modules/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './modules/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path:'inicio',
    component:   InicioComponent,
    title:'Banco UAM'
  },
  {
    path:'inicio/login',
    component: LoginComponent,
    title:'Login | BBUAM'
  },
  {
    path:'inicio/registro',
    component: RegistroComponent,
    title:'Registro | BBUAM'
  },
  {
    path:'**',
    component:PaginaNoEncontradaComponent,
    title:'Pagina no encontrada | BBUAM'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
