
import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { slide } from 'src/app/animations/silde.animation';
import { Article } from 'src/app/entity/article.type';
import * as thumbFactory from 'src/app/factories/thumb.factory';
import { ApiService } from '../services/api.service';
import { SettingsService } from '../services/settings.service';
import { Observable, ReplaySubject, Subject, Subscription, interval, map, switchMap, takeUntil, tap, timer, withLatestFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  animations: [slide]
})
export class CarouselComponent implements OnDestroy{

  private sub$: Subscription = new Subscription();
  selected$: ReplaySubject<number> = new ReplaySubject<number>();
  articles$: ReplaySubject<Article[]> = new ReplaySubject<Article[]>();

  constructor(private api: ApiService, private settingsService: SettingsService, private router: Router) {
    this.articles$.next([]);
    this.set(0);
    this.settingsService.Settings.subscribe(settings => {
      this.api.getArticles(settings.carousel.amount,0).subscribe(this.articles$);
      this.sub$.add(interval(settings.carousel.time)
      .pipe(
        withLatestFrom(this.selected$),
        map(v => ((v[1]+1)%settings.carousel.amount))
      )
      .subscribe(this.selected$));
    })
  }
  
  fontVariationSetting = function (fill: boolean) {
    return `"FILL" ${Number(fill)}`;
  }
    
  set(i: number) {
    this.selected$.next(i);
  }

  redirect(id: string) {
    this.router.navigate(['article', id]);
  }

  thumb(article: Article) {
    return thumbFactory.thumb(article);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
