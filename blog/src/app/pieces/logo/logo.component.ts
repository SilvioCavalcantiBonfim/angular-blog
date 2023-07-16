import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() color = '#F88669';
  @Input() size = 90;
}
