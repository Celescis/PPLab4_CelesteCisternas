import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-pais',
  templateUrl: './informacion-pais.component.html',
  styleUrls: ['./informacion-pais.component.css']
})
export class InformacionPaisComponent {
  @Input() paisRecibido?: any;
}
