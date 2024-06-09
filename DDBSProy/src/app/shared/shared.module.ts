import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [
    MenuComponent,
    ContactanosComponent
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
