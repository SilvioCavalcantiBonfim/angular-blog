import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderModule } from '../header/header.module';
import { PostComponent } from './post/post.component';
import { CarouselModule } from '../carousel/carousel.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    MainComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    CarouselModule,
    FooterModule
  ]
})
export class MainModule { }
