import { Component, DoCheck, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, map, zip } from 'rxjs';
import { SettingsService } from 'src/app/services/settings.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements DoCheck {

  hover: 0 | 1 = 0;

  title$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  subtitle$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  @ViewChild('title', { static: false }) title: ElementRef | undefined;
  @ViewChild('subtitle', { static: false }) subtitle: ElementRef | undefined;

  constructor(public settingsService: SettingsService, public router: Router) {}

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

  attrD(select: 1 | 0){
    return ['M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z','M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001Z'][select];
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
