import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host = 'https://web-app-limalimon.azurewebsites.net/';

  constructor(private http:HttpClient) { }

  loginAdmin(data:any){
    let url= this.host + "administracion/login";
    return this.http.post<any>(url,data);
  }
}
