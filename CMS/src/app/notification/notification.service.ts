import { Injectable } from '@angular/core';
import { Notification } from '../entity/notification.type';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: Notification[] = [];

  remove(id: string) {
    this.notifications = this.notifications.filter((e) => e.id !== id);
  }

  add(
    color: 'RED' | 'BLUE' | 'YELLOW' | 'GREEN' | 'GRAY',
    message: string,
    icon: string,
    time: number,
  ) {
    this.notifications.push({
      id: uuidv4(),
      color: color,
      message: message,
      icon: icon,
      time: time,
    });
  }
}
