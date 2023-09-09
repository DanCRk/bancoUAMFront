import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaUsuarioComponent } from './cuenta-usuario.component';



@NgModule({
  declarations: [CuentaUsuarioComponent],
  imports: [
    CommonModule
  ],exports:[CuentaUsuarioComponent]
})
export class CuentaUsuarioModule { }
