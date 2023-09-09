import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro.component'; 
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [CommonModule, FormsModule, BrowserModule],
})
export class RegistroModule { }
