import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Container } from '../../clase/container';
import { FirestoreService } from '../../services/firestore.service';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-abmcontainer',
  templateUrl: './abmcontainer.component.html',
  styleUrls: ['./abmcontainer.component.css']
})
export class ABMContainerComponent {
  containerRecibido: Container = new Container(0, '', '', 0);

  containerEnviado:any;
  containerActivo:any;

  constructor() {}

  ngOnInit(): void {}

  recibirContainerEnviado(event: any) {
    this.containerEnviado = event;
  }

  recibirContainerActivo(event: any) {
    this.containerActivo = event;
  }
}
