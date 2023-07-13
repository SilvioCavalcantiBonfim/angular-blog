import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './entity/article.type';
import { Setting } from './entity/setting.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Article[]>(`${this.endpoint}/view/all`);
  }

  getHighlights(take: number = 3) {
    return this.http.get<Article[]>(`${this.endpoint}/view/all?take=${take}`);
  }

  getSettings() {
    return this.http.get<Setting>(`${this.endpoint}/settings`);
  }
}