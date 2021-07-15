import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  opcionSeleccionada:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selectOption(num:number){
    this.opcionSeleccionada = num;
  }
  
}
