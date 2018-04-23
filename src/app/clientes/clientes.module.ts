import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**Declarando Servicio**/
import {ClientesService} from './clientes.service';
/**Componentes**/
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
/****/
/**Para trabajar con ngModel*/
import {FormsModule} from '@angular/forms';
/****/

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AltaClienteComponent, ListadoClientesComponent],
  providers:[ClientesService],
  exports: [
    AltaClienteComponent,
    ListadoClientesComponent
  ]
})
export class ClientesModule { }
