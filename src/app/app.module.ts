import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogginComponent } from './core/loggin/loggin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './core/nav/nav.component';
import { ProductosComponent } from './core/productos/productos.component';
import { MotoristasComponent } from './core/motoristas/motoristas.component';
import { OrdenesComponent } from './core/ordenes/ordenes.component';
import { InfoAdminComponent } from './core/info-admin/info-admin.component';
import { MainEmpresasComponent } from './core/empresas/main-empresas/main-empresas.component';
import { TableEmpresasComponent } from './core/empresas/table-empresas/table-empresas.component';
import { MessageService } from 'primeng/api';


import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FileUploadModule} from 'primeng/fileupload';
import {CheckboxModule} from 'primeng/checkbox';


import { EmpresasService } from './core/empresas/empresas.service';
import { AgregarEmpresaComponent } from './core/empresas/agregar-empresa/agregar-empresa.component';
import { DetalleEmpresaComponent } from './core/empresas/detalle-empresa/detalle-empresa.component';
import { ModificarEmpresaComponent } from './core/empresas/modificar-empresa/modificar-empresa.component';

import { AgregarProductoComponent } from './core/productos/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './core/productos/modificar-producto/modificar-producto.component';
import { MainProductoComponent } from './core/productos/main-producto/main-producto.component';
import { TableProductoComponent } from './core/productos/table-producto/table-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    LogginComponent,
    NavComponent,
    ProductosComponent,
    MotoristasComponent,
    OrdenesComponent,
    MainEmpresasComponent,
    TableEmpresasComponent,
    InfoAdminComponent,
    AgregarEmpresaComponent,
    DetalleEmpresaComponent,
    ModificarEmpresaComponent,
    MainProductoComponent,
    AgregarProductoComponent,
    ModificarProductoComponent,
    TableProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    FileUploadModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
