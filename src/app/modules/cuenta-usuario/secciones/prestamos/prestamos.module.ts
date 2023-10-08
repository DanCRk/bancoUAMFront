import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrestamosComponent } from './prestamos.component';



@NgModule({
  declarations: [PrestamosComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],exports:[PrestamosComponent]
})
export class PrestamosModule { }
