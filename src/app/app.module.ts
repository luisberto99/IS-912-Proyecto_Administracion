import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogginComponent } from './core/loggin/loggin.component';
import {FormsModule} from '@angular/forms';
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


import { EmpresasService } from './core/empresas/empresas.service';


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
    InfoAdminComponent
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
    FormsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
