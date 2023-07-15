import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Subscription, debounceTime, delay, filter, fromEvent, map, switchMap, take } from 'rxjs';
import { Article } from '../entity/article.type';
import { Setting } from '../entity/setting.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnDestroy {

  setting: Setting = {
    title: '',
    subtitle: '',
    carousel: {
      amount: 2,
      time: 1000,
    },
    theme: ['#FF0000', '#00FF00'],
    articles: {
      total: 0,
      per_page: 0
    }
  };

  private totalArticles$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private sub$: Subscription = new Subscription();

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  articles: Article[] = [];

  highlight$: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  constructor(public api: ApiService) {
    this.api.getSettings().subscribe({
      next: v => {
        this.setting = v;
      },
      complete: () => {
        document.body.style.backgroundImage = `linear-gradient(to right, ${this.setting.theme[0]}, ${this.setting.theme[1]})`;
        this.api.getHighlights(this.setting.carousel.amount).subscribe(this.highlight$);
        this.totalArticles$.next(1);
      }
    });

    this.sub$.add(this.totalArticles$.pipe(filter(v => v > 0)).subscribe({
      next: (v) => {
        this.loading$.next(true);
        this.api.getArticles(this.setting.articles.per_page, (v - 1) * this.setting.articles.per_page)
        .subscribe({
          next: (v) => this.articles = this.articles.concat(v),
          error: (_) => this.loading$.next(false),
          complete: () => this.loading$.next(false)
        })
      }
    }));

    this.sub$.add(fromEvent(window, 'scroll').pipe(
      debounceTime(200),
      switchMap(() => this.totalArticles$.pipe(take(1))),
      map((v) => {
        const wHeight = window.innerHeight;
        const dHeight = document.documentElement.scrollHeight;
        const tScroll = window.scrollY;
        return tScroll >= (dHeight - wHeight) && v < this.setting.articles.total / this.setting.articles.per_page;
      }),
      filter(v => v),
      switchMap(() => this.totalArticles$.pipe(take(1)))
    ).subscribe({
      next: (b) => {
        this.totalArticles$.next(b + 1)
      }
    }));
  }

  filter(array: Article[], search: string) {
    return array.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

}
