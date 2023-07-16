import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { fade } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [fade],
})
export class DropdownComponent implements OnInit, OnDestroy {
  
  dorpdownstate = false;

  private sub$: Subscription = new Subscription();

  @Input() actions!: { title: string; action: () => void; icon: string }[];
  @Input() profile!: { full_name: string; email: string };

  @ViewChild('dropdownButton') dropdownbutton: ElementRef | undefined;

  ngOnInit(): void {
    this.sub$.add(fromEvent(window, 'click').subscribe((e) => {
      if (
        this.dorpdownstate &&
        !this.dropdownbutton?.nativeElement.contains(e.target)
      ) {
        this.dorpdownstate = false;
      }
    }));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
