import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject, switchMap, take, withLatestFrom } from 'rxjs';
import { FullArticle } from '../entity/fullArticle.type';
import { ApiService } from '../services/api.service';
import { thumb } from '../factories/thumb.factory';
import { formatDateCreated } from '../factories/formatDateCreated.factory';
import { SettingsService } from '../services/settings.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {

  article$: ReplaySubject<FullArticle> = new ReplaySubject<FullArticle>();
  commentForm!: FormGroup;

  constructor(private route: ActivatedRoute, private api: ApiService, public settingsService: SettingsService) {
    
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
    this.loadArticle();
  }
  
  private loadArticle() {
    this.route.params.pipe(switchMap((v) => this.api.getFullArticle(v['id'])), take(1)).subscribe({next: e => this.article$.next(e)});
  }

  thumb(article: FullArticle) {
    return thumb(article);
  }

  formatDateCreated(created: string) {
    return formatDateCreated(created);
  }

  submitComment(event: { content: string, author: string }){
    this.route.params.pipe(
      take(1), 
      switchMap((v) => this.api.createComment(v['id'], event))
    ).subscribe({complete: () => this.loadArticle()});
  }

  
  get url() : string {
    return window.location.href
  }

  genericalShare(url: string, paramsname: string) {
    const params = new URLSearchParams();
    params.set(paramsname, this.url);
    return `${url}?${params.toString()}`;
  }
}
