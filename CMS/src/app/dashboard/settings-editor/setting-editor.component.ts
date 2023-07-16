import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { fade } from 'src/app/animations/fade.animation';
import { APICommunicationService } from 'src/app/apicommunication/apicommunication.service';
import { Setting } from 'src/app/entity/setting.type';

@Component({
  selector: 'app-setting-editor',
  templateUrl: './setting-editor.component.html',
  animations: [fade],
})
export class SettingEditorComponent implements OnInit {
  @Input() settings: Setting = {
    title: '',
    subtitle: '',
    theme: [],
    carousel: {
      amount: 0,
      time: 0,
    },
    articles: {
      total: 0,
      per_page: 0,
    },
  };

  title = '';
  subtitle = '';

  allThemes: { id: number; color1: string; color2: string }[] = [];

  constructor(private api: APICommunicationService) {
    this.api.getAllTheme().subscribe((v) => (this.allThemes = v));
  }

  changeTitle($event: Event) {
    this.title = ($event.target as HTMLInputElement).value;
  }

  changeSubtitle($event: Event) {
    this.subtitle = ($event.target as HTMLInputElement).value;
  }

  changeTime($event: Event) {
    this.settings.carousel.time = Number(($event.target as HTMLInputElement).value);
  }

  changeAmount($event: Event) {
    this.settings.carousel.amount = Number(($event.target as HTMLInputElement).value);
  }

  changePerPage($event: Event) {
    this.settings.articles.per_page = Number(($event.target as HTMLInputElement).value);
  }

  @Output() submitForm: EventEmitter<Setting> =
    new EventEmitter<Setting>();

  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.title = this.settings.title;
    this.subtitle = this.settings.subtitle;
  }

  submit() {
    this.submitForm.emit({
      ...this.settings,
      title: this.title.length === 0 ? this.settings.title : this.title,
      subtitle:
        this.subtitle.length === 0 ? this.settings.subtitle : this.subtitle,
    });
    this.show.next(false);
  }
}
