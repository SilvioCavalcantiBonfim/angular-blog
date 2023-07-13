import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/entity/comment.type';

@Component({
  selector: 'app-tile-comment',
  templateUrl: './tile-comment.component.html'
})
export class TileCommentComponent {

  @Input() comment: Comment = {
    id: '',
    article_id: '',
    content: 'comentario',
    author: 'Author',
    created_at: ''
  };

  @Output() deleteHandle: EventEmitter<Comment> = new EventEmitter<Comment>();

  formatDateCreated(): string {
    const created = new Date(this.comment.created_at);
    const now = new Date();
    const dataFormatDayString = created.toLocaleDateString('PT-BR',{year: 'numeric', month: 'long', day: 'numeric'});

    if(now.getDay() === created.getDay() && now.getMonth() === created.getMonth() && now.getFullYear() === created.getFullYear())
      return `Publicado hoje`;

    const hoursFormatString = created.getHours().toString().padStart(2,'0');
    const minutesFormatString = created.getMinutes().toString().padStart(2,'0');

    return `Publicado em ${dataFormatDayString} as ${hoursFormatString}:${minutesFormatString}`;
  }
}
