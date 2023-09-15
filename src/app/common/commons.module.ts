import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FotterComponent } from './fotter/fotter.component';
import { AvisoPrivacidadComponent } from './aviso-privacidad/aviso-privacidad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';



@NgModule({
  declarations: [HeaderComponent,FotterComponent, AvisoPrivacidadComponent, AvisoLegalComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FotterComponent,AvisoPrivacidadComponent,AvisoLegalComponent]
})
export class CommonsModule { }
