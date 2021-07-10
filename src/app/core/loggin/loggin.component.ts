import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.sass']
})
export class LogginComponent implements OnInit {

  email:string = '';
  contrasenna:string='';

  constructor() { }

  ngOnInit(): void {
  }

}
