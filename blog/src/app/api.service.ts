import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './entity/article.type';
import { Setting } from './entity/setting.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all`);
  }

  getArticles(take: number, skip: number) {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all?take=${take}&skip=${skip}`);
  }

  getHighlights(take: number = 3) {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all?take=${take}`);
  }

  getSettings() {
    return this.http.get<Setting>(`${this.endpoint}/setting`);
  }
}