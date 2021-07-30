import { Component, OnInit, ViewChild } from '@angular/core';
import { Empresa, EmpresasService } from '../empresas.service';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-table-empresas',
  templateUrl: './table-empresas.component.html',
  styleUrls: ['./table-empresas.component.sass']
})
export class TableEmpresasComponent implements OnInit {

  empresas:Empresa[] = [];

  empresasSelect:Empresa[] = [];

  estados:any[] = [
    {label:"Activo", value:1},
    {label:"Inactivo", value:0},
  ];

  loading:boolean = true;

  cols:any[] = [
    {field: 'check', head: ''},
    {field: 'nombreComercialEmpresa', head: 'Nombre Comercial'},
    {field: 'RTN', head: 'RTN'},
    {field: 'direccion', head: 'Tireccion'},
    {field: 'telefono', head: 'Telefono'},
    {field: 'estado', head: 'Estado'},
    {field: 'link', head: ''},
  ];

  @ViewChild('dt') table:any = {};

  constructor(private empresasService:EmpresasService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.empresas = this.empresasService.getEmpresas();
  console.log(this.empresas);
  
  this.primengConfig.ripple = true;
  this.loading = false;
    
  }


}
