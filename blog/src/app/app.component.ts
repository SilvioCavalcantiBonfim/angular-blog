import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { SearchService } from './services/search.service';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('search') search: ElementRef | undefined;

  constructor(private settingsService: SettingsService, private searchService: SearchService) {
    this.settingsService.Settings.subscribe((settings) => document.body.style.backgroundImage = `linear-gradient(to right, ${settings.theme[0]}, ${settings.theme[1]})`);
  }
  ngAfterViewInit(): void {
    if (this.search) {
      this.searchService.registerEvent(
        fromEvent<Event>(this.search.nativeElement, 'input')
          .pipe(
            debounceTime(300),
            map((e: Event) => (e.target as HTMLInputElement).value)
          )
      )
    }
  }

}
