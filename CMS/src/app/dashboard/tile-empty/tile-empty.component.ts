import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tile-empty',
  templateUrl: './tile-empty.component.html'
})
export class TileEmptyComponent {
  @Input() interactive: boolean = false;
  @Input() icon: string = '';
  @Input() description: string = '';
  @Output('click') onclick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();
}
