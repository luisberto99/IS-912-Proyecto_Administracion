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

  calificacion:any[] = [
    {label: 0, value: 0},
    {label: 1, value: 1},
    {label: 2, value: 2},
    {label: 3, value: 3},
    {label: 4, value: 4},
    {label: 5, value: 5}
  ]

  loading:boolean = true;

  cols:any[] = [
    {field: 'nombreComercialEmpresa', head: 'Nombre Comercial'},
    {field: 'RTN', head: 'RTN'},
    {field: 'direccion', head: 'Tireccion'},
    {field: 'telefono', head: 'Telefono'},
    {field: 'estado', head: 'Estado'},
    {field: 'calificacion', head:'Calificacion'},
    {field: 'link', head: ''},
  ];

  @ViewChild('dt') table:any = {};

  constructor(private empresasService:EmpresasService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.empresasService.getEmpresas().subscribe(
       res => {
         this.empresas = res;
         console.log(this.empresas);
         
       },
       error => {
         console.log(error);
       }
    );
  console.log(this.empresas);
  
  this.primengConfig.ripple = true;
  this.loading = false;
    
  }


}
