import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Editor, Toolbar, toHTML } from 'ngx-editor';
import { BehaviorSubject, ReplaySubject, combineLatest, concat, forkJoin, map, merge, zip } from 'rxjs';
import { InputInit } from '../entity/initInput.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init!: InputInit;

  titleGroup!: FormGroup;

  editor!: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic','underline', 'strike'],
    ['code', 'blockquote'],
    ['text_color', 'background_color'],
    [{ heading: ['h1', 'h2', 'h3'] }],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
  ];

  update: BehaviorSubject<InputInit> = new BehaviorSubject<InputInit>({id: null, title: '', thumb: '', content: ''});

  editor$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.titleGroup = new FormGroup({
      title: new FormControl(''),
      thumb: new FormControl(''),
    });
    combineLatest(
      [this.titleGroup.valueChanges, this.editor$.asObservable()]
    ).pipe(map((e) => ({...e[0], content: e[1]}))).subscribe(this.update)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['init']){
      const previewProps = changes['init'].previousValue;
      if(this.init.content !== previewProps?.content && this.init.content !== undefined){
          this.editor.setContent(this.init.content);
      }
    }
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.editor.valueChanges.pipe(map(r => toHTML(r))).subscribe(this.editor$)
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }

}
