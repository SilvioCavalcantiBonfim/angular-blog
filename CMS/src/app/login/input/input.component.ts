import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription, map } from 'rxjs';
import { shakeHorizontal } from 'src/app/animations/shake.animation';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  animations: [shakeHorizontal],
})
export class InputComponent {
  @Input() type: string = 'text';
  @Input() label: string = 'Label';
  @Input() icon: string = 'disabled_by_default';
  @Input() autocomplete: string = 'on';
  @Input() name: string = '';
  @Input() FormGroup!: FormGroup;
  @Input() LabelFormControl!: string;

  animationController = new BehaviorSubject<boolean>(true);
  alertController = new BehaviorSubject<boolean>(true);

  controller = true;

  id: string;

  private sub : Subscription | undefined;

  constructor() {
    this.id = uuidv4();
  }

  start() {
    if(this.sub === undefined){
      this.sub = this.FormGroup.get(this.LabelFormControl)?.statusChanges
      .pipe(map(v => {
        return v === 'VALID'
      }))
      .subscribe(this.alertController);
      this.alertController.next(this.FormGroup.get(this.LabelFormControl)?.status === 'VALID');
    }
    this.animationController.next(this.FormGroup.get(this.LabelFormControl)?.status === 'VALID');
  }

  get formcontrol(): FormControl {
    return this.FormGroup.get(this.LabelFormControl) as FormControl;
  }
}
