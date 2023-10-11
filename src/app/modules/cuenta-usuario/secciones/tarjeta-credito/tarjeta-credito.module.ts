import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [TarjetaCreditoComponent],
  imports: [
    CommonModule,
    NgxPaginationModule
  ],exports:[TarjetaCreditoComponent]
})
export class TarjetaCreditoModule { }
