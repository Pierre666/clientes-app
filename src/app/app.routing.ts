import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar los componentes
import { AltaClienteComponent } from './clientes/alta-cliente/alta-cliente.component';
//import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { ErroresComponent } from './errores/errores.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';

const appRoutes: Routes = [
	{path:'', component: PrincipalComponent},
	{path:'', redirectTo:'home', pathMatch:'full'},
	{path:'home', component: PrincipalComponent,
	//children:	[{path:'cliente1'},{}]
	},
	{path:'cliente', component: AltaClienteComponent},
	{path:'contacto', component: ContactoComponent},
	/**En caso exista algun error o problema**/
	{path:'**', component: ErroresComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
