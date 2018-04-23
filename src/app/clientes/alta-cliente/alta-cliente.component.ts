import { Component, OnInit } from '@angular/core';
/**Agregando service**/
import { ClientesService } from './../clientes.service';
/****/
/**Agregando el modelo de datos**/
import { Cliente, Grupo } from './../clientes.model';
/***/

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];
  tituloPadre:String;
  fechaPadre:Date;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
  	this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
  }

  mostrarNombre(){
  	console.log(this.tituloPadre);
  }

  verDatosCliente(event){
  	console.log(event);
  }

}
