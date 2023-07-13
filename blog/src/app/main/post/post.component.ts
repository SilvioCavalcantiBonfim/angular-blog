import { Component, Input } from '@angular/core';
import { Article } from 'src/app/entity/article.type';
import { thumb } from 'src/app/factories/thumb.factory';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  data = new Date();
  @Input() article!: Article;
  @Input() index: number = 0;

  formatDateCreated(): string {
    const created = new Date(this.article.created_at);
    
    const dataFormatDayString = created.toLocaleDateString('PT-BR',{year: 'numeric', month: 'long', day: 'numeric'});

    return dataFormatDayString;
  }

  thumb(article: Article) {
    return thumb(article);
  }
}
