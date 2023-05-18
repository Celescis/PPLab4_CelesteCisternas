import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Producto } from '../clase/producto';
import { Container } from '../clase/container';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore, private firestoreService: Firestore) {
  }

  guardar(producto: Producto) {
    const col = collection(this.firestoreService, "productos");
    return addDoc(
      col,
      {
        codigo: producto.codigo,
        comestible: producto.comestible,
        descripcion: producto.descripcion,
        paisOrigen: producto.paisOrigen,
        precio: producto.precio,
        stock: producto.stock
      }
    );
  }
  traer() {
    const collection = this.angularFirestore.collection<any>('productos');
    return collection.valueChanges();
  }

  guardarContainer(container: Container) {
    const col = collection(this.firestoreService, "containers");
    return addDoc(
      col,
      {
        codigo: container.codigo,
        color: container.color,
        empresa: container.empresa,
        capacidad: container.capacidad,
      }
    );
  }

  traerContainers() {
    const collection = this.angularFirestore.collection<any>('containers');
    return collection.valueChanges();
  }
}
