import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, zip } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements DoCheck {

  title$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  subtitle$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @ViewChild('title', { static: false }) title: ElementRef | undefined;
  @ViewChild('subtitle', { static: false }) subtitle: ElementRef | undefined;

  constructor(public settingsService: SettingsService) {}

  ngDoCheck(): void {
    if(!Number.isNaN(this.title?.nativeElement?.clientWidth) && this.title?.nativeElement && this.title?.nativeElement?.clientWidth > 0){
      this.title$.next(this.title?.nativeElement?.clientWidth);
    }
    if(!Number.isNaN(this.subtitle?.nativeElement?.clientWidth) && this.subtitle?.nativeElement && this.subtitle?.nativeElement?.clientWidth > 0){
      this.subtitle$.next(this.subtitle?.nativeElement?.clientWidth);
    }
  }

  get size() {
    return zip(this.title$, this.subtitle$).pipe(map(e => Math.max(...e)), distinctUntilChanged());
  }
  
}
