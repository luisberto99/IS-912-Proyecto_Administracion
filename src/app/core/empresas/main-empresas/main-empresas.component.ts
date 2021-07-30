import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-empresas',
  templateUrl: './main-empresas.component.html',
  styleUrls: ['./main-empresas.component.sass']
})
export class MainEmpresasComponent implements OnInit {
  addNewEmpresa:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addEmpresa(){
    this.addNewEmpresa = 1;
  }
}
