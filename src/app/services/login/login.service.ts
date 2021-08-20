import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginAdmin(data:any){
    let url="http://localhost:3000/administracion/login";
    return this.http.post<any>(url,data);
  }
}
