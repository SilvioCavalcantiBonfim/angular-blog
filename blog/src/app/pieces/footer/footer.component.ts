import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public router: Router) {}
  get date() {
    return (new Date()).getFullYear();
  }
}
