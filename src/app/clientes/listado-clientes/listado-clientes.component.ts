import { Component, OnInit, Input,Output,EventEmitter,OnChanges,SimpleChanges,DoCheck,OnDestroy } from '@angular/core';
/***/
import { Cliente, Grupo } from './../clientes.model';
import { ClientesService } from './../clientes.service';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
})
export class ListadoClientesComponent implements OnInit,OnChanges,DoCheck,OnDestroy {

	clientes: Cliente[];
	@Input() tituloHijo:String = 'Titulo Prueba';
	@Input('fechaHoy') fechaHijo:Date;

	@Output() datosOutput = new EventEmitter();

	constructor(private clientesService: ClientesService) { }

	/**Hook**/
	ngOnChanges(changes:SimpleChanges){
		//console.log(changes);
		console.log("Hay cambios en el componente");
	}

	ngOnInit() {
		this.clientes = this.clientesService.getClientes();
		console.log("Componente Iniciado");
	}

	ngDoCheck(){
		console.log("Dockeck Ejecutado");
	}

	ngOnDestroy(){
		console.log("Destroy Ejecutado");
	}

	emitirEvento(){
		this.datosOutput.emit({
			'titulo':this.tituloHijo,
			'fecha':this.fechaHijo
		});
	}



}
