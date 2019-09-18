import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos:Ingreso[]=[];//El arreglo se inicializara en el respectivo constructor del modelo
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;
  }

  //Obtener el ingreso Total
  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso =>{//this.ingresos a arreglo de ingresos
      ingresoTotal += ingreso.valor;//ingresoTotal + ingreso.valor
    });
    return ingresoTotal;
  }

  //Obtener el egreso Total
  getEgresoTotal(){
    let egresoTotal:number = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    });
    return egresoTotal;
  }

  //Porcentaje total
  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal(); //dividios egresos/ingresos

  }

  //Presupuesto Total
  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
