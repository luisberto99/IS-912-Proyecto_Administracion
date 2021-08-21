import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.sass']
})
export class DetalleEmpresaComponent implements OnInit {

  empresa:any = {}

  constructor( private activatedRoute:ActivatedRoute, 
    private empresaService:EmpresasService
    ) { 
    this.activatedRoute.params.subscribe(params =>{
      this.paramsChange(params.idEmpresa);
      
    });
  }
  paramsChange(idEmpresa: any) {
    this.empresaService.getEmpresa(idEmpresa).subscribe(
       res => {
         this.empresa = res
       },
       error => {
         console.log(error);
       }
    );
  }

  ngOnInit(): void {
  }

}
