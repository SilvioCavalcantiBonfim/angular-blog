import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { shakeHorizontal } from 'src/app/animations/shake.animation';
import { Settings } from 'src/app/entity/setting.type';

@Component({
  selector: 'app-comment-submit',
  templateUrl: './comment-submit.component.html',
  animations: [shakeHorizontal]
})
export class CommentSubmitComponent {

  @Input() settings!: Settings;
  @Output() onSubmit: EventEmitter<{ content: string, author: string }> = new EventEmitter<{ content: string, author: string }>();

  validateContent$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  validateAccept$: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  hover: 0 | 1 = 0;

  control = {
    content: new FormControl('', [Validators.required]),
    author: new FormControl(''),
    accept: new FormControl('', [Validators.requiredTrue]),
  }

  commentForm: FormGroup<{ content: FormControl<string | null>; author: FormControl<string | null>; accept: FormControl<string | null>; }>;

  constructor(public router: Router) {
    this.commentForm = new FormGroup(this.control);
    this.validateAccept$.next(false);
    this.validateContent$.next(false);

  }

  onsubmit() {
    this.validateContent$.next(this.control.content.status === 'INVALID');
    this.validateAccept$.next(this.control.accept.status === 'INVALID');
    if (this.commentForm.valid && this.control.content.value !== null && this.control.author.value !== null) {
      let content: string = this.control.content.value;
      let author: string = (this.control.author.value.length > 0)? this.control.author.value: 'Anônimo';
      this.onSubmit.emit({ content, author });
      this.commentForm.reset();
    }
  }
}
