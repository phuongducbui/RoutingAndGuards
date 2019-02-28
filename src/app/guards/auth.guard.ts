import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 01. kiểm tra local storage có biến currentUser hay không?
      if (localStorage.getItem('currentUser')) {
        return true;
      }


    // 02. Khác thì return false;
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });

      return false;
  }

}
