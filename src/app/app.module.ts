import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogginComponent } from './core/loggin/loggin.component';
import { FormsModule } from "@angular/forms";
import { EmpresasComponent } from './core/empresas/empresas.component';
import { NavComponent } from './core/nav/nav.component';
import { ProductosComponent } from './core/productos/productos.component';
import { MotoristasComponent } from './core/motoristas/motoristas.component';
import { OrdenesComponent } from './core/ordenes/ordenes.component';
import { InfoAdminComponent } from './core/info-admin/info-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    EmpresasComponent,
    NavComponent,
    ProductosComponent,
    MotoristasComponent,
    OrdenesComponent,
    InfoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
