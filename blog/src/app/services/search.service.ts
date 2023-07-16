import { Injectable, OnDestroy } from '@angular/core';
import { Observable, ReplaySubject, Subscription, filter } from 'rxjs';
import { Article } from '../entity/article.type';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnDestroy{

  private sub$: Subscription = new Subscription();
  private articlesSearch$: ReplaySubject<Article[]> = new ReplaySubject<Article[]>();
  private search$: ReplaySubject<string> = new ReplaySubject<string>();

  constructor(private api: ApiService) {
    this.search$.next('');
    this.articlesSearch$.next([]);
    this.sub$.add(this.search$.pipe(filter(v => v !== '')).subscribe(search => {
      this.api.searchArticles(search).subscribe(v => this.articlesSearch$.next(v))
    }));
  }

  registerEvent($event: Observable<string>) {
    this.sub$.add($event.subscribe(this.search$));
  }

  get search() {
    return this.search$.asObservable();
  }

  get Articles() {
    return this.articlesSearch$.asObservable();
  }
  
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
