import { Component, inject } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject } from 'rxjs';
import { Article } from '../entity/article.type';
import { Setting } from '../entity/setting.type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent {

  setting: Setting = {
    title: '',
    subtitle: '',
    carousel_amount: 2,
    carousel_time: 1000,
    Theme: {
      color1: '#FF0000',
      color2: '#00FF00',
    },
  };
  articles$: BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);
  highlight$:  BehaviorSubject<Article[]> = new BehaviorSubject<Article[]>([]);

  constructor(public api: ApiService) {
    api.getAll().subscribe(this.articles$)
    api.getSettings().subscribe({
      next: v => this.setting = v,
      complete: () => {
        document.body.style.backgroundImage = `linear-gradient(to right, ${this.setting.Theme.color1}, ${this.setting.Theme.color2})`;
        api.getHighlights(this.setting.carousel_amount).subscribe(this.highlight$);
      }
    });
  }

}
