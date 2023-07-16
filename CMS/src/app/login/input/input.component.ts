import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { shakeHorizontal } from 'src/app/animations/shake.animation';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  animations: [shakeHorizontal],
})
export class InputComponent {
  @Input() type = 'text';
  @Input() label = 'Label';
  @Input() icon = 'disabled_by_default';
  @Input() autocomplete = 'on';
  @Input() name = '';
  @Input() FormGroup!: FormGroup;
  @Input() LabelFormControl!: string;

  animationController$ = new BehaviorSubject<boolean>(true);

  id: string;

  constructor() {
    this.id = uuidv4();
  }

  start() {
    this.animationController$.next(
      this.FormGroup.get(this.LabelFormControl)?.status === 'VALID',
    );
  }

  get formcontrol(): FormControl {
    return this.FormGroup.get(this.LabelFormControl) as FormControl;
  }
}
