import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.sass']
})
export class EmpresasComponent implements OnInit {
  addNewEmpresa:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addEmpresa(){
    this.addNewEmpresa = 1;
  }
}
