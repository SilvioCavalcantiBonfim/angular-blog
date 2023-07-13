import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

interface Action { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export class PermissionService implements CanActivate {

  constructor(private cookie: CookieService, private router: Router) { }


  actions: Action = {
    login(obj: PermissionService) {
      if(obj.isLogged()){
        obj.router.navigate(['/dashboard']);
      }
      return !obj.isLogged();
    },
    dashboard(obj: PermissionService) {
      if(!obj.isLogged()){
        obj.router.navigate(['/login']);
      }
      return obj.isLogged();
    },
  };

  private isLogged() {
    return this.cookie.get('access_token').length > 0;
  }

  logout() {
    this.router.navigate(['/login']);
    this.cookie.delete('access_token');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    const currentRoute = state.url.substring(1);

    const action = this.actions[currentRoute];
    
    if(action)
      return action(this);

    return true;
  }
}
