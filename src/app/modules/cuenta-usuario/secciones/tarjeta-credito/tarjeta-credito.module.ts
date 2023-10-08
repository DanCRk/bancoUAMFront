import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';



@NgModule({
  declarations: [TarjetaCreditoComponent],
  imports: [
    CommonModule
  ],exports:[TarjetaCreditoComponent]
})
export class TarjetaCreditoModule { }
