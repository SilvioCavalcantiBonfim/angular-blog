import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { Setting } from '../entity/setting.type';
import { BehaviorSubject, distinctUntilChanged, forkJoin, map, max, zip } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements DoCheck {

  title$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  subtitle$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  
  ngDoCheck(): void {
    if(!Number.isNaN(this.title?.nativeElement?.clientWidth) && this.title?.nativeElement && this.title?.nativeElement?.clientWidth > 0){
      this.title$.next(this.title?.nativeElement?.clientWidth);
    }
    if(!Number.isNaN(this.subtitle?.nativeElement?.clientWidth) && this.subtitle?.nativeElement && this.subtitle?.nativeElement?.clientWidth > 0){
      this.subtitle$.next(this.subtitle?.nativeElement?.clientWidth);
    }
  }

  @Input() setting: Setting | undefined;
  @ViewChild('title', { static: false }) title: ElementRef | undefined;
  @ViewChild('subtitle', { static: false }) subtitle: ElementRef | undefined;
  
  sizeLogo: number = 0;

  ngOnInit(): void {
    this.size.subscribe(console.log)
  }

  
  get size() {
    return zip(this.title$, this.subtitle$).pipe(map(e => Math.max(...e)), distinctUntilChanged());
  }
  
}
