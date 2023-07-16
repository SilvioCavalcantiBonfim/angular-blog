import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    NgxEditorModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [EditorComponent],
})
export class EditorModule {}
