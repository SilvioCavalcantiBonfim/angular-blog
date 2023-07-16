import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { APICommunicationService } from '../apicommunication/apicommunication.service';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @ViewChild('email') inputEmail: InputComponent | undefined;
  @ViewChild('password') inputPassword: InputComponent | undefined;
  @ViewChild('alert') alert: AlertComponent | undefined;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(5),
      Validators.required,
    ]),
  });

  constructor(private api: APICommunicationService) {
    document.title = 'CMS | Login';
  }

  onSubmit() {
    if (this.loginForm.status === 'VALID') {
      this.api.Auth(
        String(this.loginForm.get('email')?.value),
        String(this.loginForm.get('password')?.value),
        () => {
          this.alert?.show();
        },
      );
    } else {
      this.inputEmail?.start();
      this.inputPassword?.start();
    }
  }
}
