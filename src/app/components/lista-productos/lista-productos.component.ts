import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productoss:Producto[];

  @Input() textoBoton:string;

  @Output() productoSeleccionado:EventEmitter<number>;

  constructor() { 
    this.productoSeleccionado=new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(indice){
    this.productoSeleccionado.emit(indice);
  }

}
