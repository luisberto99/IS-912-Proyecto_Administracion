import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
// import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http:HttpClient) { }

  verifyUser(){
    
    let user = `${window.localStorage.getItem('user')}`
    let url = `http://localhost:3000/administracion/${user}/verificar`;

    return new Promise((resolve,rejects)=>{
      this.http.get<any>(url).subscribe(res =>{
        console.log(res);
        
        if(res.result){
          resolve(true);
        }else{
          rejects(false);
        }
      })

    })       
  }

}
