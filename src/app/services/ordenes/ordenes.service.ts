import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  host = 'https://web-app-limalimon.azurewebsites.net/';

  constructor(private http:HttpClient) { }

  getOrdenesDisponibles(){
    return this.http.get<any>(this.host + "ordenes/disponibles");
  }

  AsignarMotoristaOrden(data:any){
    let url = this.host + "ordenes/asignarMotorista";
    return this.http.put<any>(url,data);
  }

  obtenerMotoristasDisponibles(){
    return this.http.get<any>(this.host + "motoristas/disponibles");
  }

  actualizarEstadoMotorista(data:any){
    let url = this.host + "motoristas/actualizarEstadoo"
    return this.http.put<any>(url,data);
  }

}
