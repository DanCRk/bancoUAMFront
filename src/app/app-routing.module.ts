import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/componentes/login.component';
import { InicioComponent } from './modules/inicio/componentes/inicio.component';
import { PaginaNoEncontradaComponent } from './modules/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './modules/registro/registro.component';
import { TodasCuentasComponent } from './modules/todas-cuentas/todas-cuentas.component';
import { CuentaUsuarioComponent } from './modules/cuenta-usuario/cuenta-usuario.component';
import { AvisoPrivacidadComponent } from './common/aviso-privacidad/aviso-privacidad.component';
import { AvisoLegalComponent } from './common/aviso-legal/aviso-legal.component';
import { TodastarjetascreditoComponent } from './modules/todastarjetascredito/todastarjetascredito.component';
import { PrestamosycreditosComponent } from './modules/prestamosycreditos/prestamosycreditos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio/cuenta/todas',
    component: TodasCuentasComponent,
    title: '  Cuentas | BBUAM',
  },
  {
    path: 'inicio/cuenta/solicita',
    component: TodasCuentasComponent,
    title: '  Cuentas | BBUAM',
  },
  {
    path: 'inicio/cuenta/solicita/:tipo',
    component: TodasCuentasComponent,
    title: '  Cuentas | BBUAM',
  },

  {
    path: 'inicio',
    component: InicioComponent,
    title: 'Banco UAM',
  },
  {
    path: 'inicio/login',
    component: LoginComponent,
    title: 'Login | BBUAM',
  },
  {
    path: 'inicio/registro',
    component: RegistroComponent,
    title: 'Registro | BBUAM',
  },
  {
    path: 'cuenta/inicio',
    component: CuentaUsuarioComponent,
    title: 'Cuenta | BBUAM',
  },
  {
    path: 'inicio/aviso-de-privacidad',
    component: AvisoPrivacidadComponent,
    title: 'Privacidad | BBUAM',
  },
  {
    path: 'inicio/aviso-legal',
    component: AvisoLegalComponent,
    title: 'Privacidad | BBUAM',
  },
  {
    path: 'inicio/tarjetascredito/todas',
    component: TodastarjetascreditoComponent,
    title: 'todas las tarjetas de credito | BBUAM',
  },
  {
    path: 'inicio/prestamos/creditos',
    component: PrestamosycreditosComponent,
    title: 'prestamos y creditos | BBUAM',
  },
  {
    path: '**',
    component: PaginaNoEncontradaComponent,
    title: 'Pagina no encontrada | BBUAM',
  },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
