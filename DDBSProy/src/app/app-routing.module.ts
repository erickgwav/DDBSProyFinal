import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { ContactanosComponent } from './shared/contactanos/contactanos.component';
import { PaquetesComponent } from './shared/paquetes/paquetes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'paquetes', component: PaquetesComponent},
  {path: 'contactanos', component: ContactanosComponent},
  


  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
