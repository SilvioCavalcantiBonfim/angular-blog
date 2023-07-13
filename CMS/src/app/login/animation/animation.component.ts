import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animation',
  template: '<ng-lottie [options]="options"/>',
})
export class AnimationComponent {
  options: AnimationOptions = {
    path: '/assets/blog.json',
  };

}
