import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/entity/comment.type';
import { formatDateCreated } from 'src/app/factories/formatDateCreated.factory';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  @Input() comment: Comment = {
    id: '',
    article_id: '',
    content: '',
    author: 'teste',
    created_at: ''
  };
  @Input() theme!: string;

  formatDateCreated = formatDateCreated;

}
