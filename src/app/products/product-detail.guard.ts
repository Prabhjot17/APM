import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {

  }
  canActivate(
    // contains info abt the current route 
    next: ActivatedRouteSnapshot,
    // contains info abt the current state of route information
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    // the url path is like products/10 --> products/Id , we are only concern abt Id which is 2nd element in url 
    // string so we use url[1] to get that id and + is used to convert it to numeric value .
    if (isNaN(id) || id < 1) {
      alert('Invalid product id');
      this.router.navigate(['/products']);
      return false;
    };
    return true;
  }

}
