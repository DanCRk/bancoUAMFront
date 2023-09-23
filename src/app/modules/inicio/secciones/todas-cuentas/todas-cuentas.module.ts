import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodasCuentasComponent } from './todas-cuentas.component';



@NgModule({
  declarations: [TodasCuentasComponent],
  imports: [
    CommonModule
  ],
  exports:[TodasCuentasComponent]
})
export class TodasCuentasModule { }
