import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './common/commons.module';
import { LoginModule } from './modules/login/login.module';
import { InicioModule } from './modules/inicio/inicio.module';
import { AppProperties } from './core/interfaces/appProperties/app-properties';
import { ConfigService } from './core/services/config/iniciocuenta.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TodasCuentasModule } from './modules/todas-cuentas/todas-cuentas.module';
import { FormsModule } from '@angular/forms'; 
import { RegistroModule } from './modules/registro/registro.module';
import { CuentaUsuarioComponent } from './modules/cuenta-usuario/cuenta-usuario.component';
import { CuentaUsuarioModule } from './modules/cuenta-usuario/cuenta-usuario.module';
import { ErrorInterceptor } from './core/interceptores/error-interceptor.service';
import { SolicitarTarjetaComponent } from './modules/solicitar-tarjeta/solicitar-tarjeta.component';
import { TarjetaasociadaComponent } from './modules/tarjetaasociada/tarjetaasociada.component';
import { TodastarjetascreditoComponent } from './modules/todastarjetascredito/todastarjetascredito.component';
export function ConfigLoader(injector: Injector): () => Promise<AppProperties> {
  return () => injector.get(ConfigService).loadConfiguration();
}

@NgModule({
  declarations: [
    AppComponent,
    SolicitarTarjetaComponent,
    TarjetaasociadaComponent,
    TodastarjetascreditoComponent,
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
    AppRoutingModule
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
    }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
