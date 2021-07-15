import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.sass']
})
export class LogginComponent implements OnInit {
  //variable para controlar el acceso a rutas.
  stateSesion:boolean = false;

  user:any = {
    email: '',
    password: ''
  }

  userValidate = {
    email: 'admin@gmail.com',
    password: 'root'
  }
  constructor( private httpCliente:HttpClient, private route:Router, private activatedRoute:ActivatedRoute ) {}

  ngOnInit(): void {
  }
  // ,{email:this.user.email, password:this.user.password}

  login(){
    /* this.httpCliente.post('http://localhost:3000/login',{email:this.user.email, password:this.user.password}).subscribe(res =>{
      console.log(res);
    }); 
    console.log("datos enviados");
    console.log(this.user); */
    if(this.user.email == this.userValidate.email && this.userValidate.password == this.user.password){
      this.route.navigate(['/admin']);
      this.stateSesion = true;
    }else{
      this.route.navigate(['/']);
      this.user.email = "";
      this.user.password = "";
    }
  }

}
