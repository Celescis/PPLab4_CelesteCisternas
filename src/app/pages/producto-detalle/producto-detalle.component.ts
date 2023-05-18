import { Component } from '@angular/core';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent {
  productoActivo: Producto = new Producto(0, '', 0, 0, {}, false);

  productoSeleccionado($event: any) {
    this.productoActivo = $event;
  }
}
