import { AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Editor, Toolbar, toHTML } from 'ngx-editor';
import { BehaviorSubject, Observable, ReplaySubject, combineLatest, fromEvent, map } from 'rxjs';
import { InputInit } from '../entity/initInput.interface';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit, OnDestroy, OnChanges {

  @Input() init!: InputInit;

  titleGroup!: FormGroup;
  titleControl!: FormControl;

  editor!: Editor;

  toolbar: Toolbar = [
    ['bold', 'italic','underline', 'strike'],
    ['code', 'blockquote'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
    ['horizontal_rule', 'format_clear'],
  ];

  update: BehaviorSubject<InputInit> = new BehaviorSubject<InputInit>({id: null, title: '', content: ''});

  constructor() {
    this.titleControl = new FormControl();
    this.titleGroup = new FormGroup({
      title: this.titleControl
    });

    // this.update.subscribe(console.log)
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

    combineLatest(
      [
        this.titleControl.valueChanges,
        this.editor.valueChanges.pipe(map(r => toHTML(r)))
      ]
    ).pipe(
      map(r => ({id: this.init.id, title: r[0], content: r[1]} as InputInit))).subscribe(this.update)
  }

  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}
