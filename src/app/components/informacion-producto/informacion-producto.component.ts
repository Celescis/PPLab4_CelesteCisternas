import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/clase/producto';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent {
  @Input() productoRecibido?: Producto;
}
