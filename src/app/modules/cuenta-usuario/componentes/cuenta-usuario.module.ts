import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaUsuarioComponent } from './cuenta-usuario.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [CuentaUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule
  ],exports:[CuentaUsuarioComponent]
})
export class CuentaUsuarioModule { }
