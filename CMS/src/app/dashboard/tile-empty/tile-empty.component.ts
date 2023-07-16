import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile-empty',
  templateUrl: './tile-empty.component.html',
})
export class TileEmptyComponent {
  @Input() interactive = false;
  @Input() icon = '';
  @Input() description = '';
  @Output() handleClick: EventEmitter<MouseEvent> =
    new EventEmitter<MouseEvent>();
}
