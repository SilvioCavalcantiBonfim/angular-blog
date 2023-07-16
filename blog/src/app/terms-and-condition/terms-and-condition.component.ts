import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
})
export class TermsAndConditionComponent {
  options: AnimationOptions = {
    path: '/assets/Terms_and_conditions.json',
  }
}
