import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PaquetesComponent } from './paquetes/paquetes.component';


@NgModule({
  declarations: [
    MenuComponent,
    ContactanosComponent,
    PaquetesComponent,
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
