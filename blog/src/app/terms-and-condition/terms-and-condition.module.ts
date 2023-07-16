import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsAndConditionRoutingModule } from './terms-and-condition-routing.module';
import { TermsAndConditionComponent } from './terms-and-condition.component';
import { LottieModule } from 'ngx-lottie';


@NgModule({
  declarations: [
    TermsAndConditionComponent
  ],
  imports: [
    CommonModule,
    TermsAndConditionRoutingModule,
    LottieModule
  ]
})
export class TermsAndConditionModule { }
