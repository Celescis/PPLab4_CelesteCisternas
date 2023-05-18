export class Container {

    codigo: number;
    color: string;
    empresa: string;
    capacidad: number;

    constructor(codigo: number, color: string, empresa: string, capacidad: number) {

        this.codigo = codigo;
        this.color = color;
        this.empresa = empresa;
        this.capacidad = capacidad;
    }
}