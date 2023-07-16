import { Component} from '@angular/core';
import { debounceTime, filter, fromEvent } from 'rxjs';
import { Article } from '../entity/article.type';
import { ArticlesService } from '../services/articles.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent{

  constructor(public articleService: ArticlesService, public searchService: SearchService) {
    articleService.registerEvent(
      fromEvent(window, 'scroll')
        .pipe(
          debounceTime(200),
          filter(() => {
            const wHeight = window.innerHeight;
            const dHeight = document.documentElement.scrollHeight;
            const tScroll = window.scrollY;
            return tScroll >= (dHeight - wHeight);
          }
          )
        )
    );
  }

  filter(array: Article[], search: string) {
    return array.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))
  }
}
