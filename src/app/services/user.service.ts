import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  seLogueo: boolean = false;
  esAdmin: boolean = false;


  constructor(private router: Router,
    private swalService: SwalService) {

  }

  login(correo: any, password: any) {

    firebase.auth().signInWithEmailAndPassword(correo, password).then((response) => {
      let userCorreo = response.user?.email ? response.user?.email : '';
      this.seLogueo = true;
      localStorage.setItem("correo", userCorreo);
      let logueo = this.getEmailUser()?.split('@')[0];;
      if (logueo === 'admin') {
        this.esAdmin = true;
      }

      this.router.navigate(['/bienvenido']);
    })
      .catch(async (error) => {
        let errorMessage = error.message;

        if (errorMessage.includes('correo', 'password') || !correo.valid && !password.valid) {
          errorMessage = 'Debe ingresar un correo y contraseña correcta';

        } else if (errorMessage.includes('password') || !password.valid) {
          errorMessage = 'Por favor, ingrese una contraseña válida.';
        } else {
          errorMessage = "Usuario inexistente";
        }
        this.swalService.crearSwal(errorMessage, "ERROR", 'error');
      });
  }

  logout() {
    firebase.auth().signOut();
    this.seLogueo = false;
    this.esAdmin = false;
    this.swalService.crearSwal("Sesión cerrada", "Hasta la próxima", 'success');
    this.router.navigate(['/login']);
  }

  getEmailUser() {
    return firebase.auth().currentUser?.email || null;
  }
}
