import { Component, EventEmitter, Output } from '@angular/core';
import { Container } from '../../clase/container';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-lista-container',
  templateUrl: './lista-container.component.html',
  styleUrls: ['./lista-container.component.css']
})
export class ListaContainerComponent {
  @Output() DevolverContainer: EventEmitter<Container> = new EventEmitter<Container>();

  listadoContainers: Container[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    this.firestoreService.traerContainers().subscribe((containers) => {
      if (containers != null) {
        this.listadoContainers = containers;
      }
    });
  }

  enviarContainer(event:any){
    this.DevolverContainer.emit(event);
  }
}
