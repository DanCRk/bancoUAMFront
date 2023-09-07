import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/componentes/login.component';
import { InicioComponent } from './modules/inicio/componentes/inicio.component';

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
    path:'login',
    component: LoginComponent,
    title:'Login'
  },
  {
    path:'**',
    component:LoginComponent,
    title:'Pagina no encontrada'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
