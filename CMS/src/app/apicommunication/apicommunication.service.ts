import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SHA256 } from 'crypto-js';
import { Router } from '@angular/router';
import { Article } from '../entity/article.type';
import { Setting } from '../entity/setting.type';
import { Profile } from '../entity/profile.type';
import { ArticleInterface } from '../entity/article.interface';

@Injectable({
  providedIn: 'root',
})
export class APICommunicationService {
  private endpoint = import.meta.env['NG_APP_ENDPOINT'];

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router,
  ) {
    console.log(this.endpoint)
  }
  
  private Authorization() {
    return new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.cookie.get('access_token')}`,
    );
  }

  Auth(
    user_access: string,
    password: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError?: (error: any) => void,
  ) {
    this.http
      .post<{ access_token: string }>(`${this.endpoint}/auth`, {
        user_access: user_access,
        password: SHA256(password).toString(),
      })
      .subscribe({
        next: (response) => {
          this.cookie.set('access_token', response.access_token);
          this.router.navigate(['/dashboard']);
        },
        error: handleError,
      });
  }

  updateProfile(args: {full_name?: string, email?: string, password?: string}) {
    const body: {full_name?: string, email?: string, password?: string} = {};
    if (args.full_name) {
      body.full_name = args.full_name;
    }
    if (args.email) {
      body.email = args.email;
    }
    if (args.password) {
      body.password = SHA256(args.password).toString();
    }
    return this.http.put<Profile>(`${this.endpoint}/profile`, body, {
      headers: this.Authorization(),
    });
  }

  setSettings(body: Setting) {
    return this.http.put<Setting>(`${this.endpoint}/setting`, body, {
      headers: this.Authorization(),
    });
  }

  getSettings() {
    return this.http.get<Setting>(`${this.endpoint}/setting`);
  }

  GetArticles() {
    return this.http.get<Article[]>(`${this.endpoint}/article/read/all`);
  }

  GetFullArticle(id: string) {
    return this.http.get<Article>(`${this.endpoint}/article/read/${id}`);
  }

  deleteArticle(id: string) {
    return this.http.delete<void>(`${this.endpoint}/article/delete/${id}`, {
      headers: this.Authorization(),
    });
  }

  GetProfile() {
    return this.http.get<Profile>(`${this.endpoint}/profile`, {
      headers: this.Authorization(),
    });
  }

  createArticle(body: { title: string; thumb: string; content: string }) {
    return this.http.post<ArticleInterface>(`${this.endpoint}/article/create`, body, {
      headers: this.Authorization(),
    });
  }

  updateArticle(id: string, body: { title: string; content: string }) {
    return this.http.put<ArticleInterface>(`${this.endpoint}/article/update/${id}`, body, {
      headers: this.Authorization(),
    });
  }

  deleteComment(id: string) {
    return this.http.delete<void>(`${this.endpoint}/comment/delete/${id}`, {
      headers: this.Authorization(),
    });
  }

  getAllTheme() {
    return this.http.get<{ id: number; color1: string; color2: string }[]>(
      `${this.endpoint}/setting/theme/all`,
    );
  }
}
