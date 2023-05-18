import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FirestoreService } from '../../services/firestore.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-alta-producto',
  templateUrl: './form-alta-producto.component.html',
  styleUrls: ['./form-alta-producto.component.css']
})
export class FormAltaProductoComponent implements OnInit {
  @Input() paisRecibido?: any;
  producto: Producto = new Producto(0, '', 0, 0, {}, false);
  form!: FormGroup;

  constructor(private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      comestible: ['', Validators.required],
    });

  }


  guardar() {
    if (!this.form.invalid) {

      this.producto.codigo = this.form.value.codigo;
      this.producto.descripcion = this.form.value.descripcion;
      this.producto.precio = this.form.value.precio;
      this.producto.stock = this.form.value.stock;
      this.producto.comestible = this.form.value.comestible;
      this.producto.paisOrigen = this.paisRecibido;


      if (this.form.value.comestible == 'si') {
        this.producto.comestible = true;
      } else if (this.form.value.comestible == 'no') {
        this.producto.comestible = false;
      }

      this.firestoreService.guardar(this.producto).then(() => {
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
    this.producto = new Producto(0, '', 0, 0, '', false);
    this.form.reset();
    this.paisRecibido = null;
  }

  volver() {
    this.router.navigate(['/bienvenido'])
  }
}

