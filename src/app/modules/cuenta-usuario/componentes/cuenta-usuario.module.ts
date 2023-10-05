import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaUsuarioComponent } from './cuenta-usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CuentaUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[CuentaUsuarioComponent]
})
export class CuentaUsuarioModule { }
