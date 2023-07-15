import { Injectable, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject, Observable, ReplaySubject, Subscription, delay, filter, switchMap, tap, withLatestFrom } from 'rxjs';
import { Article } from '../entity/article.type';
import { SettingsService } from './settings.service';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService implements OnDestroy {

  private sub$: Subscription = new Subscription();

  private loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private totalArticles$: ReplaySubject<number> = new ReplaySubject<number>();
  private articles$: ReplaySubject<Article[]> = new ReplaySubject<Article[]>();

  constructor(private api: ApiService, private settingsService: SettingsService, private searchService: SearchService) {

    this.sub$.add(this.totalArticles$.pipe(
      filter(v => v > 0),
      withLatestFrom(this.articles$, this.settingsService.Settings),
      tap(() => this.loading$.next(true))
    ).subscribe((v) => {
      this.api.getArticles(v[2].articles.per_page, (v[0] - 1) * v[2].articles.per_page)
        .subscribe({
          next: (e) => this.articles$.next(v[1].concat(e)),
          complete: () => this.loading$.next(false)
        })
    }));
    
    this.articles$.next([]);
    this.totalArticles$.next(1);
  }
  
  registerEvent($event: Observable<any>) {
    this.sub$.add(
      $event.pipe(
        withLatestFrom(this.totalArticles$, this.settingsService.Settings),
        filter((v) => v[1] <=  Math.floor(v[2].articles.total / v[2].articles.per_page)),
        )
        .subscribe(v => this.totalArticles$.next(v[1] + 1))
        );
      }
      
      get articles(): Observable<Article[]> {
        return this.articles$.asObservable();
      }
      
      get loading(): Observable<boolean> {
        return this.loading$.asObservable();
      }
      
      ngOnDestroy(): void {
        this.sub$.unsubscribe();
      }
    }
    