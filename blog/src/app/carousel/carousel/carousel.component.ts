
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { slide } from 'src/app/animations/silde.animation';
import { Article } from 'src/app/entity/article.type';
import * as thumbFactory from 'src/app/factories/thumb.factory';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  animations: [slide]
})
export class CarouselComponent implements OnChanges{
  @Input() interval: number = 0;
  @Input() articles: Article[] = [];
  
  fontVariationSetting = function (fill: boolean) {
    return `"FILL" ${Number(fill)}`;
  }
  
  timer: number = 0;
  
  private timeout: any;
  
  ngOnChanges(s: any): void {
    this.set(0);
  }

  set(v: number) {
    const value = v%this.articles.length;
    if(Number.isNaN(value))
      return
    this.timer = value >= 0 ? value : value + this.articles.length;
    this.reset();
  }
  
  reset() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.set(this.timer+1), this.interval);
  }

  thumb(article: Article) {
    return thumbFactory.thumb(article);
  }
}
