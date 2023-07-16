import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
})
export class SwitchComponent {
  classComment: { [key: string]: string } = {
    EDITOR: 'w-10 text-gray-500',
    COMMENT: 'flex-1 text-gray-800',
  };

  classEditor: { [key: string]: string } = {
    COMMENT: 'w-10 text-gray-500',
    EDITOR: 'flex-1 text-gray-800',
  };

  state: BehaviorSubject<'EDITOR' | 'COMMENT'> = new BehaviorSubject<
    'EDITOR' | 'COMMENT'
  >('EDITOR');
}
