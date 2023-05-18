import { Component } from '@angular/core';
import { Producto } from 'src/app/clase/producto';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.css']
})
export class ListadoPublicoComponent {
  listadoProductos: Producto[] = [];
  listadoPublico: Producto[] = [];
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.firestoreService.traer().subscribe((productos) => {
      if (productos != null) {
        this.listadoProductos = productos;
        this.listadoPublico = this.listadoProductos.filter((p) => {
          return p.stock > 0;
        });
      }
    });
  }
}
