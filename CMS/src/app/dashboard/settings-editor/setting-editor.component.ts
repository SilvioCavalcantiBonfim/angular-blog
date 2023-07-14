import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { fade } from 'src/app/animations/fade.animation';
import { shakeHorizontal } from 'src/app/animations/shake.animation';
import { APICommunicationService } from 'src/app/apicommunication/apicommunication.service';
import { Setting } from 'src/app/entity/setting.type';

@Component({
  selector: 'app-setting-editor',
  templateUrl: './setting-editor.component.html',
  animations: [fade, shakeHorizontal]
})
export class SettingEditorComponent implements OnInit {

  @Input() settings: Setting = {
    title: '',
    subtitle: '',
    theme: [],
    carousel: {
      amount: 0,
      time: 0
    },
    articles: {
      total: 0,
      per_page: 0
    }
  }; 

  title: string = '';
  subtitle: string = '';
  
  allThemes: {id: number, color1: string, color2: string}[] = [];
  
  constructor(private api: APICommunicationService) {
    this.api.getAllTheme().subscribe(v => this.allThemes = v);
  }

  changeTitle($event: any) {
    this.title = $event.target.value;
  }

  changeSubtitle($event: any) {
    this.subtitle = $event.target.value;
  }

  changeTime($event: any) {
    this.settings.carousel.time = Number($event.target.value);
  }

  changeAmount($event: any) {
    this.settings.carousel.amount = Number($event.target.value);
  }

  changePerPage($event: any) {
    this.settings.articles.per_page = Number($event.target.value);
  }

  @Output('submitForm') onSubmit: EventEmitter<Setting> = new EventEmitter<Setting>();

  show: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit(): void {
    this.title = this.settings.title;
    this.subtitle = this.settings.subtitle;
  }
  
  submit() {
    this.onSubmit.emit({ 
      ...this.settings, 
      title: (this.title.length === 0)?this.settings.title:this.title, 
      subtitle: (this.subtitle.length === 0)?this.settings.subtitle:this.subtitle 
    });
    this.show.next(false);
  }
}
