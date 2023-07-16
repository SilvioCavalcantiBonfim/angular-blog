import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor(public router: Router) {}
  get date() {
    return (new Date()).getFullYear();
  }
}
