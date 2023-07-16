import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Setting } from '../entity/setting.type';
import { Article } from '../entity/article.type';
import { FullArticle } from '../entity/fullArticle.type';
import { Comment } from '../entity/comment.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endpoint: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getSettings() {
    return this.http.get<Setting>(`${this.endpoint}/setting`);
  }

  getArticles(take: number, skip: number) {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all?take=${take}&skip=${skip}`);
  }

  searchArticles(search: string) {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all?search=${search}`);
  }

  getFullArticle(id: string) {
    return this.http.get<FullArticle>(`${this.endpoint}/article/read/${id}`);
  }

  createComment(id: string, data: { content: string, author: string }) {
    return this.http.post<Comment>(`${this.endpoint}/comment/create/${id}`, data);
  }
}
