import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { PermissionService } from 'src/app/Permission/permission.service';
import { fade } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  animations: [fade]
})
export class DropdownComponent implements OnInit{

  dorpdownstate = false;

  @Input() actions!: {title:string, action: (() => void), icon: string}[];
  @Input() profile!: {full_name: string, email: string};

  @ViewChild('dropdownButton') dropdownbutton: ElementRef | undefined;

  ngOnInit(): void {
    fromEvent(window, 'click').subscribe((e) => {
      if (this.dorpdownstate && !this.dropdownbutton?.nativeElement.contains(e.target)) {
        this.dorpdownstate = false
      }
    })
  }

}
