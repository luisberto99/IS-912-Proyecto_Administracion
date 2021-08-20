import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto, ProductoService, Empresa } from '../producto.service';
import { Table } from 'primeng/table';
import { PrimeNGConfig } from 'primeng/api';
import { EmpresasService } from '../../empresas/empresas.service';

@Component({
  selector: 'app-table-producto',
  templateUrl: './table-producto.component.html',
  styleUrls: ['./table-producto.component.sass']
})
export class TableProductoComponent implements OnInit {

  productos:Producto[] = [];
  empresas:Empresa[] = [];

  estados:any[] = [
    {label:"Activo", value:1},
    {label:"Inactivo", value:0},
  ];

  loading:boolean = true;

  cols:any[] = [
    {field: 'nombreProducto', head: 'Nombre Producto'},
    {field: 'descripcion', head: 'descripcion'},
    {field: 'recio', head: 'Precio'},
    {field: 'estado', head: 'Estado'},
  ];

  @ViewChild('dt') table:any = {};

  constructor(private EmpresasService:EmpresasService, private productoService:ProductoService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.EmpresasService.getEmpresas().subscribe(
       res => {
         this.empresas = res;
         console.log(this.empresas);
         this.empresas.forEach(em => {
           em.productosEmpresa.forEach(produc => {
             this.productos.push(produc)
           });
         });
         console.log(this.productos);
         
       },
       error => {
         console.log(error);
       }
    );
  
  this.primengConfig.ripple = true;
  this.loading = false;
    
  }


}
