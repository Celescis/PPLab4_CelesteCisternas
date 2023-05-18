import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { SwalService } from '../services/swal.service';

@Injectable({
  providedIn: 'root',
})
export class CanActivateLoginGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router, private swalService: SwalService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userService.seLogueo) {
      console.log('Usuario Logueado CanActivate');
      return true;
    }
    console.log('Usuario No Logueado CanActivate');
    this.swalService.crearSwal("DEBE LOGUEARSE PRIMERO", "Inicie sesión", 'warning').then
    {
      this.router.navigate(['/login']);
      return false;
    };
  }
}
