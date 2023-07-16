import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationContainerComponent } from './notification-container/notification-container.component';

@NgModule({
  declarations: [NotificationComponent, NotificationContainerComponent],
  imports: [CommonModule],
  exports: [NotificationComponent],
})
export class NotificationModule {}
