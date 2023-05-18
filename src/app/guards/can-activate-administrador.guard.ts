import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { SwalService } from '../services/swal.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateAdministradorGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router, private swalService: SwalService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.esAdmin) {
      console.log('Usuario Admin Logueado CanActivate');
      return true;
    }
    console.log('Usuario No Admin Logueado CanActivate');
    this.swalService.crearSwal("INHABILITADO", "No tiene acceso a este lugar", 'warning').then
    {
      this.router.navigate(['']);
      return false;
    };
  }


}
