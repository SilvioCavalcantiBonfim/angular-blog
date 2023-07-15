import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, ReplaySubject, take } from 'rxjs';
import { Settings } from '../entity/setting.type';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings$: ReplaySubject<Settings> = new ReplaySubject<Settings>();

  constructor(private api: ApiService) {
    this.api.getSettings().subscribe(this.settings$);
  }

  get Settings() : Observable<Settings> {
    return this.settings$.pipe(take(1));
  }
  
}
