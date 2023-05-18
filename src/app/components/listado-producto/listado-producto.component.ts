import { Component, EventEmitter, Output } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-listado-producto',
  templateUrl: './listado-producto.component.html',
  styleUrls: ['./listado-producto.component.css']
})
export class ListadoProductoComponent {
  @Output() enviarProducto: EventEmitter<Producto> =
    new EventEmitter<Producto>();
  listadoProductos: Producto[] = [];
  
  constructor(private firestoreService:FirestoreService) {

  }
  ngOnInit(): void {
    this.firestoreService.traer().subscribe((productos) => {
      if (productos != null) {
        this.listadoProductos = productos;
      }
    });
  }

  pasarProducto($event: any) {
    this.enviarProducto.emit($event);
  }
}
