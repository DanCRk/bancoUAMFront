import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaUsuarioComponent } from './cuenta-usuario.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import {NgxPaginationModule} from 'ngx-pagination'



@NgModule({
  declarations: [CuentaUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,TabViewModule,
    NgxPaginationModule
  ],exports:[CuentaUsuarioComponent]
})
export class CuentaUsuarioModule { }
