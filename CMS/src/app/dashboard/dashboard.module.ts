import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EditorModule } from '../editor/editor.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TileArticleComponent } from './tile-article/tile-article.component';
import { SwitchComponent } from './switch/switch.component';
import { TileCommentComponent } from './tile-comment/tile-comment.component';
import { TileEmptyComponent } from './tile-empty/tile-empty.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from '../notification/notification.module';
import { NavegationComponent } from './navegation/navegation.component';
import { SettingEditorComponent } from './settings-editor/setting-editor.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DropdownComponent,
    TileArticleComponent,
    SwitchComponent,
    TileCommentComponent,
    TileEmptyComponent,
    ProfileEditorComponent,
    NavegationComponent,
    SettingEditorComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    NotificationModule,
  ],
})
export class DashboardModule {}
