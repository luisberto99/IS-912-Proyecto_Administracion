import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(private http:HttpClient) { }





  getOrdenesDisponibles(){
    return this.http.get<any>("http://localhost:3000/ordenes/disponibles");
  }

  AsignarMotoristaOrden(data:any){
    let url = "http://localhost:3000/ordenes/asignarMotorista";
    return this.http.put<any>(url,data);
  }

  obtenerMotoristasDisponibles(){
    return this.http.get<any>("http://localhost:3000/motoristas/disponibles");
  }

  actualizarEstadoMotorista(data:any){
    let url = "http://localhost:3000/motoristas/actualizarEstadoo"
    return this.http.put<any>(url,data);
  }

}
