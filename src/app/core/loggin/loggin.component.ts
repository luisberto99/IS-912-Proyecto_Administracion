import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.sass']
})
export class LogginComponent implements OnInit {

  user:any = {
    email: '',
    password: ''
  }

  constructor( private httpCliente:HttpClient ) {}

  ngOnInit(): void {
  }
  // ,{email:this.user.email, password:this.user.password}

  login(){
    this.httpCliente.post('http://localhost:3000/login',{email:this.user.email, password:this.user.password}).subscribe(res =>{
      console.log(res);
    }); 
    // console.log("datos enviados");
    // console.log(this.user);
    
    console.log(this.user.email,this.user.password);
    
  }

}
