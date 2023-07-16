import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { fade } from 'src/app/animations/fade.animation';
import { Notification } from 'src/app/entity/notification.type';

@Component({
  selector: 'app-notification-container',
  templateUrl: './notification-container.component.html',
  animations: [fade],
})
export class NotificationContainerComponent implements OnInit, OnDestroy {
  @Input() notification!: Notification;
  @Output() callback: EventEmitter<string> = new EventEmitter<string>();

  colors = {
    RED: [
      ['bg-red-200', 'text-red-800'],
      ['hover:bg-red-200', 'hover:text-red-800'],
      ['bg-red-800'],
    ],
    BLUE: [
      ['bg-blue-200', 'text-blue-800'],
      ['hover:bg-blue-200', 'hover:text-blue-800'],
      ['bg-blue-800'],
    ],
    YELLOW: [
      ['bg-yellow-200', 'text-yellow-800'],
      ['hover:bg-yellow-200', 'hover:text-yellow-800'],
      ['bg-yellow-800'],
    ],
    GREEN: [
      ['bg-green-200', 'text-green-800'],
      ['hover:bg-green-200', 'hover:text-green-800'],
      ['bg-green-800'],
    ],
    GRAY: [
      ['bg-white', 'text-gray-800'],
      ['hover:bg-gray-200', 'hover:text-gray-800'],
      ['bg-gray-800'],
    ],
  };

  private sub$: Subscription = new Subscription();

  size = 1;

  ngOnInit(): void {
    this.sub$.add(
      interval(50).subscribe((value) => {
        if (this.size === 0) this.callback.emit(this.notification.id);
        this.size = 1 - (value * 50) / this.notification.time;
      }),
    );
  }

  close() {
    this.callback.emit(this.notification.id);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
