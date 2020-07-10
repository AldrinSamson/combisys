import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(//private authService: AuthService,
    private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const x = false;
    if (!x) {
      this.router.navigate(['/auth']);
      return false;
    } else {
      return true;
    }
  }
}

// @Injectable()
// export class AuthGuardDuoService implements CanActivate {
//   constructor(private authService: AuthService,
//     private router: Router) { }

//   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (!this.authService.isAuthenticated() && !this.authService.isManager()) {
//       this.router.navigate(['/project']);
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
