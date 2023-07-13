import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
