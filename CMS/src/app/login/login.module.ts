import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { InputComponent } from './input/input.component';
import { AnimationComponent } from './animation/animation.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    LoginComponent,
    InputComponent,
    AnimationComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    LottieModule
  ]
})
export class LoginModule { }
