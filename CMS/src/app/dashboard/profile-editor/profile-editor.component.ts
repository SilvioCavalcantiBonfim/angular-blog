import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { fade } from 'src/app/animations/fade.animation';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  animations: [fade]
})
export class ProfileEditorComponent implements OnInit {

  profileForm!: FormGroup;

  @Output('submitForm') onSubmit: EventEmitter<{ full_name?: string, email?: string, password?: string}> = new EventEmitter<{ full_name?: string, email?: string, password?: string}>();

  @Input() init: { full_name: string, email: string } = { full_name: '', email: '' };

  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      full_name: new FormControl(this.init.full_name),
      email: new FormControl(this.init.email, [Validators.email]),
      password: new FormControl(''),
      repeatPassword: new FormControl('')
    });
  }

  submit() {
    const rt: any = {};
    if (this.profileForm.value.full_name !== '')
      rt.full_name = this.profileForm.value.full_name
    if (this.profileForm.value.email !== '' && this.profileForm.valid)
      rt.email = this.profileForm.value.email
    if (this.profileForm.value.password === this.profileForm.value.repeatPassword && this.profileForm.value.password !== '')
      rt.password = this.profileForm.value.password
    this.show.next(false);
    this.onSubmit.emit(rt);
  }
}
