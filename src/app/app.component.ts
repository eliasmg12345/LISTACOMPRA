import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  productosSeleccionados:Producto[];
  productosComprados:Producto[];

  constructor(){
    this.productosSeleccionados=[];
    this.productosComprados=[];
  }

  onProductoCreado($event){
    this.productosSeleccionados.push($event);
  }

  onProductoSeleccionado($event){
    const pro=this.productosSeleccionados.splice($event,1);
    this.productosComprados.push(pro[0]);
  }

  onProductoNoSeleccionado($event){
    const pro=this.productosComprados.splice($event,1);
    this.productosSeleccionados.push(pro[0]);
  }

}
