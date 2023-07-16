import { Component, Input } from '@angular/core';
import { fade } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  animations: [fade],
})
export class AlertComponent {
  @Input() timeout = 5000;
  view = false;
  show() {
    this.view = true;
    const tm = setTimeout(() => {
      this.view = false;
      return () => clearTimeout(tm);
    }, this.timeout);
  }
}
