import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**Importar Routing**/
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
/****/
import { ClientesModule } from './clientes/clientes.module';
/**Components**/
import { ErroresComponent } from './errores/errores.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';

/**Para trabajar con ngModel*/
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ErroresComponent,
    PrincipalComponent,
    ContactoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule,
    routing,
    FormsModule
  ],
  providers: [
  	appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
