import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.sass']
})
export class LogginComponent implements OnInit {
  //variable para controlar el acceso a rutas.
  // stateSesion:boolean = false;

  user:any = {
    email: '',
    password: ''
  }
  emailAdmin = new FormControl('',[Validators.email, Validators.required])
  passwordAdmin = new FormControl('',[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$'),Validators.minLength(8)])

  userValidate = {
    email: 'admin@gmail.com',
    password: 'root'
  }
  constructor( private httpCliente:HttpClient, 
              private route:Router, 
              private activatedRoute:ActivatedRoute,
              private loginService:LoginService
              ) {}

  ngOnInit(): void {
  }
  // ,{email:this.user.email, password:this.user.password}

  get password(){
    return this.passwordAdmin;
  }

  get email(){
    return this.emailAdmin;
  }
  login(){

    this.loginService.loginAdmin({password: this.password?.value, email:this.email?.value}).subscribe(res =>{
      // console.log(res);
      if(res.result){
        window.localStorage.setItem('user',res.id);
        this.route.navigate(['/admin']);
      }else{
        this.password.reset();
        this.email.reset();
        this.route.navigate(['/']);
      }
      
    });

    /* this.httpCliente.post('http://localhost:3000/login',{email:this.user.email, password:this.user.password}).subscribe(res =>{
      console.log(res);
    }); 
    console.log("datos enviados");
    console.log(this.user); */
    // if(this.user.email == this.userValidate.email && this.userValidate.password == this.user.password){
    //   this.route.navigate(['/admin']);
    //   this.stateSesion = true;
    // }else{
    //   this.route.navigate(['/']);
    //   this.user.email = "";
    //   this.user.password = "";
    // }
  }

  redirectNow(){
    this.password.reset();
    this.email.reset();
  }
}
