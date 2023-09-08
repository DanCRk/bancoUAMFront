import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './common/commons.module';
import { LoginModule } from './modules/login/login.module';
import { InicioModule } from './modules/inicio/inicio.module';
import { AppProperties } from './core/interfaces/appProperties/app-properties';
import { ConfigService } from './core/services/config/config.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

export function ConfigLoader(injector: Injector): () => Promise<AppProperties> {
  return () => injector.get(ConfigService).loadConfiguration();
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
    HttpClientModule,
    LoginModule,
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
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
