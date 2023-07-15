import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  @Input() color: string = '#F88669';
  @Input() size: number = 90;
}
