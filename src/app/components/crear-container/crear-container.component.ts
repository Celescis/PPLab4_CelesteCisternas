import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FirestoreService } from '../../services/firestore.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from 'src/app/clase/container';

@Component({
  selector: 'app-crear-container',
  templateUrl: './crear-container.component.html',
  styleUrls: ['./crear-container.component.css']
})
export class CrearContainerComponent {
  @Output() EnviarContainer: EventEmitter<Container> = new EventEmitter<Container>();
  listadoContainers: Container[] = [];
  container: Container = new Container(0, '', '', 0);

  form!: FormGroup;

  constructor(private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      color: ['', Validators.required],
      empresa: ['', Validators.required],
      capacidad: ['', Validators.required]
    });

  }


  guardar() {
    if (!this.form.invalid) {

      this.container.codigo = this.form.value.codigo;
      this.container.color = this.form.value.color;
      this.container.empresa = this.form.value.empresa;
      this.container.capacidad = this.form.value.capacidad;

      this.firestoreService.guardarContainer(this.container).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Guardado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      });

      this.limpiar();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Por favor, complete todos los campos del formulario'
      });
    }
  }

  limpiar() {
    this.container = new Container(0, '', '', 0);
    this.form.reset();
  }

  volver() {
    this.router.navigate(['/bienvenido'])
  }
}
