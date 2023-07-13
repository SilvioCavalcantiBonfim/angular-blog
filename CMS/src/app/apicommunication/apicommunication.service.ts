import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { SHA256 } from 'crypto-js';
import { Router } from '@angular/router';
import { Article } from '../entity/article.type';

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

  GetArticles() {
    return this.http.get<Article[]>(`${this.endpoint}/view/all`);
  }

  GetFullArticle(id: string) {
    return this.http.get<Article>(`${this.endpoint}/view/by/${id}`);
  }

  private Authorization() {
    return new HttpHeaders().set('Authorization', `Bearer ${this.cookie.get('access_token')}`);
  }

  deleteArticle(id: string){
    return this.http.delete<any>(`${this.endpoint}/article/delete/${id}`, { headers: this.Authorization() });
  }

  GetProfile(){
    return this.http.get<{full_name: string, email: string}>(`${this.endpoint}/profile`, { headers: this.Authorization() });
  }


  createArticle(body: {title: string, content: string}) {
    return this.http.post<any>(`${this.endpoint}/article/new`, body,{ headers: this.Authorization()});
  }

  updateArticle(id: string, body: {title: string, content: string}) {
    return this.http.post<any>(`${this.endpoint}/article/update/${id}`, body,{ headers: this.Authorization()});
  }

  deleteComment(id: string){
    return this.http.delete<any>(`${this.endpoint}/comment/delete/${id}`, { headers: this.Authorization() });
  }
}
