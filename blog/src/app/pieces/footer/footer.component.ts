import { Component, Input } from '@angular/core';

@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  get date() {
    return (new Date()).getFullYear();
  }
}
