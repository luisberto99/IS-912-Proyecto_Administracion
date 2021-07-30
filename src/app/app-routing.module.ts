import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogginComponent } from "./core/loggin/loggin.component";
import { NavComponent } from './core/nav/nav.component';
import { ProductosComponent } from './core/productos/productos.component';
import { InfoAdminComponent } from './core/info-admin/info-admin.component';
import { MotoristasComponent } from './core/motoristas/motoristas.component';
import { OrdenesComponent } from './core/ordenes/ordenes.component';
import { MainEmpresasComponent } from './core/empresas/main-empresas/main-empresas.component';

//localhost:4200/welcome

const routes: Routes = [
  {path: "admin", component: NavComponent,
  children: [
    {path:'empresas', component: MainEmpresasComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'motoristas', component: MotoristasComponent},
    {path: 'ordenes', component: OrdenesComponent},
    {path: '', component: InfoAdminComponent, pathMatch: 'full'}
  ]},
  {path: "", component:LogginComponent, pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
