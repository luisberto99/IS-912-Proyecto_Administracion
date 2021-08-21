import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogginComponent } from "./core/loggin/loggin.component";
import { NavComponent } from './core/nav/nav.component';
import { InfoAdminComponent } from './core/info-admin/info-admin.component';
import { MotoristasComponent } from './core/motoristas/motoristas.component';
import { OrdenesComponent } from './core/ordenes/ordenes.component';
import { MainEmpresasComponent } from './core/empresas/main-empresas/main-empresas.component';
import { AgregarEmpresaComponent } from './core/empresas/agregar-empresa/agregar-empresa.component';
import { TableEmpresasComponent } from './core/empresas/table-empresas/table-empresas.component';
import { ModificarEmpresaComponent } from './core/empresas/modificar-empresa/modificar-empresa.component';
import { MainProductoComponent } from './core/productos/main-producto/main-producto.component';
import { AgregarProductoComponent } from './core/productos/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './core/productos/modificar-producto/modificar-producto.component';
import { TableProductoComponent } from './core/productos/table-producto/table-producto.component';
import { DefaultGuard } from './guards/default.guard';

//localhost:4200/welcome

const routes: Routes = [
  {path: "admin", component: NavComponent,
  canActivate:[DefaultGuard],
  children: [
    {path:'empresas', component: MainEmpresasComponent, children: [
      {path: "addEmpresa", component: AgregarEmpresaComponent},
      {path: ":idEmpresa", component: ModificarEmpresaComponent},
      {path: "", component: TableEmpresasComponent},
    ]},
    {path: 'productos', component: MainProductoComponent, children: [
      {path: "addProducto", component: AgregarProductoComponent},
      {path: ":idProducto", component: ModificarProductoComponent},
      {path: "", component: TableProductoComponent},
    ]},
    {path: 'motoristas', component: MotoristasComponent},
    {path: 'ordenes', component: OrdenesComponent},
    {path: '', component: InfoAdminComponent, pathMatch: 'full'}
  ]},
  {path: "", component:LogginComponent, pathMatch: "full"},
  {path:"**",redirectTo:""}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
