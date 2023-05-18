import { Component, EventEmitter, Output } from '@angular/core';
import { PaisesApiService } from '../../services/paises-api.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent {
  @Output() botonClickeado = new EventEmitter<any>();
  paises: any[] = [];
  listadoPaises: any;
  listadoPaisesContinente: any;
  listadoReducido: any[] = [];

  constructor(private paisService: PaisesApiService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((data: any[]) => {
      this.paises = data;
    });
  }

  clickListado(pais: any) {
    this.botonClickeado.emit(pais);
  }



}
