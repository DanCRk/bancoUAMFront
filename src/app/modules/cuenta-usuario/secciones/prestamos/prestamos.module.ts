import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrestamosComponent } from './prestamos.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [PrestamosComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule
  ],exports:[PrestamosComponent]
})
export class PrestamosModule { }
