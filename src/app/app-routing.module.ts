import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/componentes/inicio.component';
import { PaginaNoEncontradaComponent } from './modules/pagina-no-encontrada/pagina-no-encontrada.component';
import { RegistroComponent } from './modules/inicio/secciones/registro/registro.component';
import { TodasCuentasComponent } from './modules/inicio/secciones/todas-cuentas/todas-cuentas.component';

import { AvisoPrivacidadComponent } from './common/aviso-privacidad/aviso-privacidad.component';
import { AvisoLegalComponent } from './common/aviso-legal/aviso-legal.component';
import { TodastarjetascreditoComponent } from './modules/inicio/secciones/todastarjetascredito/todastarjetascredito.component';
import { PrestamosycreditosComponent } from './modules/inicio/secciones/prestamosycreditos/prestamosycreditos.component';
import { LoginComponent } from './modules/inicio/secciones/login/login.component';
import { CuentaUsuarioComponent } from './modules/cuenta-usuario/componentes/cuenta-usuario.component';
import { DatosPersonalesComponent } from './modules/cuenta-usuario/secciones/datos-personales/datos-personales.component';
import { TransferirComponent } from './modules/cuenta-usuario/secciones/transferir/transferir.component';
import { PrestamosComponent } from './modules/cuenta-usuario/secciones/prestamos/prestamos.component';
import { TarjetaCreditoComponent } from './modules/cuenta-usuario/secciones/tarjeta-credito/tarjeta-credito.component';
import { PagarTarjetaComponent } from './modules/cuenta-usuario/secciones/pagar-tarjeta/pagar-tarjeta.component';
import { PagarPrestamoComponent } from './modules/cuenta-usuario/secciones/pagar-prestamo/pagar-prestamo.component';
import { SimularCompraComponent } from './modules/cuenta-usuario/secciones/simular-compra/simular-compra.component';

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
    path: 'inicio/login/:tipo',
    component: LoginComponent,
    title: 'Login | BBUAM',
  },
  {
    path: 'inicio/registro',
    component: RegistroComponent,
    title: 'Registro | BBUAM',
  },{

    path: 'inicio/registro/:tipo',
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
    path: 'cuenta/administrar/personales',
    component: DatosPersonalesComponent,
    title: 'prestamos y creditos | BBUAM',
  },
  {
    path: 'cuenta/transferir/acuentasbbuam',
    component: TransferirComponent,
    title: 'prestamos y creditos | BBUAM',
  },
  {
    path: 'cuenta/tarjetaCredito',
    component: TarjetaCreditoComponent,
    title: 'Tarjeta de Credito | BBUAM',
  },
  {
    path: 'cuenta/prestamos',
    component: PrestamosComponent,
    title: 'Prestamo | BBUAM',
  },
  {
    path: 'cuenta/pagar/tarjetaCredito',
    component: PagarTarjetaComponent,
    title: 'Pagar Tarjeta Credito | BBUAM',
  },
  {
    path: 'cuenta/pagar/prestamos',
    component: PagarPrestamoComponent,
    title: 'Pagar Prestamo | BBUAM',
  },
  {
    path: 'cuenta/pagar/tarjetaCredito/simularCompra',
    component: SimularCompraComponent,
    title: 'Simular Compra | BBUAM',
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
