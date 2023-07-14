import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SHA256 } from 'crypto-js';
import { Router } from '@angular/router';
import { Article } from '../entity/article.type';
import { Setting } from '../entity/setting.type';
import { Profile } from '../entity/profile.type';

@Injectable({
  providedIn: 'root'
})
export class APICommunicationService {

  private endpoint = 'http://localhost:3000';//import.meta.env['NG_APP_ENDPOINT'];
  
  
  constructor(private http: HttpClient, private cookie: CookieService, private router: Router) {}

  Auth(user_access: string, password: string, handleError?: ((error: any) => void)) {
    this.http.post<{access_token: string}>(`${this.endpoint}/auth`, {
      user_access: user_access,
      password: SHA256(password).toString()
    }).subscribe({
      next: (response) => {
        this.cookie.set('access_token', response.access_token);
        this.router.navigate(['/dashboard']);
      },
      error: handleError
    })
  }

  updateProfile(args: any) {
    const body: any = {};
    if(args.full_name){
      body.full_name = args.full_name
    }
    if(args.email){
      body.email = args.email
    }
    if(args.password){
      body.password = SHA256(args.password).toString()  
    }
    return this.http.post<any>(`${this.endpoint}/profile`, body, { headers: this.Authorization()});
  }

  setSettings(body: Setting){
    return this.http.post<Setting>(`${this.endpoint}/setting`, body,{ headers: this.Authorization()});
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

  private Authorization() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('access_token')}`);
  }

  deleteArticle(id: string){
    return this.http.delete<any>(`${this.endpoint}/article/delete/${id}`, { headers: this.Authorization() });
  }

  GetProfile(){
    return this.http.get<Profile>(`${this.endpoint}/profile`, { headers: this.Authorization() });
  }


  createArticle(body: {title: string, thumb: string, content: string}) {
    return this.http.post<any>(`${this.endpoint}/article/create`, body,{ headers: this.Authorization()});
  }

  updateArticle(id: string, body: {title: string, content: string}) {
    return this.http.post<any>(`${this.endpoint}/article/update/${id}`, body,{ headers: this.Authorization()});
  }

  deleteComment(id: string){
    return this.http.delete<any>(`${this.endpoint}/comment/delete/${id}`, { headers: this.Authorization() });
  }

  getAllTheme() {
    return this.http.get<{id: number, color1: string, color2: string}[]>(`${this.endpoint}/setting/theme/all`);
  }
}
