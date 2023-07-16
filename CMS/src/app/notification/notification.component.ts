import { Component } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  constructor(public notificationService: NotificationService) {}
}
