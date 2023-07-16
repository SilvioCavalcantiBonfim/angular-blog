import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navegation',
  templateUrl: './navegation.component.html',
})
export class NavegationComponent {
  @Input() title = 'Dashboard';
}
