import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fade } from 'src/app/animations/fade.animation';
import { Article } from 'src/app/entity/article.type';
import { thumb } from 'src/app/factories/thumb.factory';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  animations: [fade]
})
export class PostComponent {
  data = new Date();
  @Input() article!: Article;
  @Input() index = 0;

  constructor(private router: Router) {}

  formatDateCreated(): string {
    const created = new Date(this.article.created_at);
    
    const dataFormatDayString = created.toLocaleDateString('PT-BR',{year: 'numeric', month: 'long', day: 'numeric'});

    return dataFormatDayString;
  }
  
  set(id: string){
    this.router.navigate(['article', id]);
  }

  thumb(article: Article) {
    return thumb(article);
  }
}
