import { Component, Input } from '@angular/core';
import { Setting } from '../entity/setting.type';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  
  @Input() settings!: Setting;

  get date() {
    return (new Date()).getFullYear();
  }
}
