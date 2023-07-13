import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LogoComponent
  ]
})
export class HeaderModule { }
