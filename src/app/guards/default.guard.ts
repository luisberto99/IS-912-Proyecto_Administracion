import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdministradorService } from '../services/administradores/administrador.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

  constructor(private route:Router,private serviceAdmin:AdministradorService,
    private http:HttpClient){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      

    let user = `${window.localStorage.getItem('user')}`
    let url = `http://localhost:3000/administracion/${user}/verificar`;

    // return new Promise((resolve,rejects)=>{
    //   this.http.get<any>(url).subscribe(res =>{
    //     console.log(res);
        
    //     if(res.result){
    //       resolve(true);
    //     }else{
    //       rejects(false);
    //     }
    //   })

    // })

    // (async () => {
      
    //   const b = this.serviceAdmin.verifyUser().then(results =>{
                  
    //     return results;
        
    //   }).catch(e =>{
    //     // console.log(e);
        
    //     // this.route.navigate(['/'])
    //     return false;
    //   })
    // })

    let b = this.serviceAdmin.verifyUser().then(results =>{
      
      if(results){
        return true
      }else{
        return false
      }
      // return results;
      
    }).catch(e =>{
      
      return false;
    })

    console.log(b);
    
    return b?true:false;
    
  }

  
  
}
