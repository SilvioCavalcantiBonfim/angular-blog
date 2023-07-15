import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, switchMap } from 'rxjs';
import { Article } from '../entity/article.type';
import { FullArticle } from '../entity/fullArticle.type';
import { ApiService } from '../services/api.service';
import { thumb } from '../factories/thumb.factory';
import { formatDateCreated } from '../factories/formatDateCreated.factory';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  article$: ReplaySubject<FullArticle> = new ReplaySubject<FullArticle>();
  constructor(private route: ActivatedRoute, private api: ApiService) {
    this.article$.next({
      title: 'teste',
      content: '',
      created_at: '',
      updated_at: '',
      thumb: '',
      Author: {
        full_name: '',
        email: undefined
      },
      comments: []
    });
    this.route.params.pipe(switchMap((v) => this.api.getFullArticle(v['id']))).subscribe(this.article$);
  }
  thumb(article: FullArticle) {
    return thumb(article);
  }
  formatDateCreated(created: string) {
    return formatDateCreated(created);
  }
}
