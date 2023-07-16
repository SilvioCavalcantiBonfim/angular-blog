import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article.component';
import { CommentComponent } from './comment/comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentSubmitComponent } from './comment-submit/comment-submit.component';


@NgModule({
  declarations: [
    ArticleComponent,
    CommentComponent,
    CommentSubmitComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule
  ]
})
export class ArticleModule { }
