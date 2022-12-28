import { Injectable } from '@angular/core';
import {
  Router, CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanActivateChild
} from '@angular/router';
import { AuthService } from '../_services/data/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.checkToken()) {
      return true;
    }

    this.router.navigate(['/login']);
    // not logged in so redirectToParts to login page with the return url and return false
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, childState: RouterStateSnapshot) {
    return this.canActivate(childRoute, childState);
  }
}
