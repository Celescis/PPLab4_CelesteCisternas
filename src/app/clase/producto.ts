export class Producto {

    codigo: number;
    descripcion: string;
    precio: number;
    stock: number;
    paisOrigen: any;
    comestible: boolean;

    constructor(codigo: number, descripcion: string, precio: number, stock: number, paisOrigen: any, comestible: boolean) {

        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.paisOrigen = paisOrigen;
        this.comestible = comestible;
    }
}