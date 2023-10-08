import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './common/commons.module';
import { LoginModule } from './modules/inicio/secciones/login/login.module';
import { InicioModule } from './modules/inicio/inicio.module';
import { AppProperties } from './core/interfaces/appProperties/app-properties';
import { ConfigService } from './core/services/config/configService.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodasCuentasModule } from './modules/inicio/secciones/todas-cuentas/todas-cuentas.module';
import { FormsModule } from '@angular/forms'; 
import { RegistroModule } from './modules/inicio/secciones/registro/registro.module';
import { MessageService } from 'primeng/api';
import { ErrorInterceptor } from './core/interceptores/error-interceptor.service';
import { TodastarjetascreditoComponent } from './modules/inicio/secciones/todastarjetascredito/todastarjetascredito.component';
import { PrestamosycreditosComponent } from './modules/inicio/secciones/prestamosycreditos/prestamosycreditos.component';
import { CuentaUsuarioModule } from './modules/cuenta-usuario/componentes/cuenta-usuario.module';
import { DatosPersonalesComponent } from './modules/cuenta-usuario/secciones/datos-personales/datos-personales.component';
export function ConfigLoader(injector: Injector): () => Promise<AppProperties> {
  return () => injector.get(ConfigService).loadConfiguration();
}

import { provideAnimations } from '@angular/platform-browser/animations';
import { TransferirComponent } from './modules/cuenta-usuario/secciones/transferir/transferir.component';
import { TarjetaCreditoComponent } from './modules/cuenta-usuario/secciones/tarjeta-credito/tarjeta-credito.component';
import { PrestamosModule } from './modules/cuenta-usuario/secciones/prestamos/prestamos.module';
import { TarjetaCreditoModule } from './modules/cuenta-usuario/secciones/tarjeta-credito/tarjeta-credito.module';
import { PagarTarjetaComponent } from './modules/cuenta-usuario/secciones/pagar-tarjeta/pagar-tarjeta.component';
import { PagarPrestamoComponent } from './modules/cuenta-usuario/secciones/pagar-prestamo/pagar-prestamo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodastarjetascreditoComponent,
    PrestamosycreditosComponent,
    DatosPersonalesComponent,
    TransferirComponent,
    PagarTarjetaComponent,
    PagarPrestamoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonsModule,
    CuentaUsuarioModule,
    HttpClientModule,
    LoginModule,
    RegistroModule,
    TodasCuentasModule,
    InicioModule,
    TarjetaCreditoModule,
    AppRoutingModule,
    PrestamosModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [Injector],
      multi: true,
    
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },MessageService,provideAnimations()
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
