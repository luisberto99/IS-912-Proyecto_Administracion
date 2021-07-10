import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpresasComponent } from './core/empresas/empresas.component';
import { LogginComponent } from "./core/loggin/loggin.component";


const routes: Routes = [
  {path: "empresas", component: EmpresasComponent},
  {path: "", component:LogginComponent, pathMatch: "full"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
