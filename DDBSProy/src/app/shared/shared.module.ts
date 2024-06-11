import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';


@NgModule({
  declarations: [
    MenuComponent,
    ContactanosComponent,
    PaquetesComponent,
    CrearEventoComponent,
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
