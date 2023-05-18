import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Producto } from '../clase/producto';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private angularFirestore: AngularFirestore, private firestoreService:Firestore) { 
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

}
