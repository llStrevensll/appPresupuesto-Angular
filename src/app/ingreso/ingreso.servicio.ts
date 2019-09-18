import { Ingreso } from './ingreso.model';

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario", 4000),
        new Ingreso("Venta coche", 500)
    ];

    eliminar(ingreso:Ingreso){
        const indice: number = this.ingresos.indexOf(ingreso);//regresa el indice del objeto
        this.ingresos.splice(indice,1);//elimina el elemento seleccionado
    }
}

