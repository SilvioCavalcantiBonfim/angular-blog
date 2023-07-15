import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { PostComponent } from './post/post.component';
import { CarouselModule } from '../carousel/carousel.module';
import { PiecesModule } from '../pieces/pieces.module';


@NgModule({
  declarations: [
    MainComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    CarouselModule,
    PiecesModule
  ]
})
export class MainModule { }
