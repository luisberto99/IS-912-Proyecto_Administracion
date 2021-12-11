import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

    host = 'https://web-app-limalimon.azurewebsites.net/';

  constructor(private http:HttpClient ) { }

  /* MOTORISTAS VERIFICADOS PARA PODER REALIZAR ENTREGAS. */
  motoristasVerificados(){
    
    return this.http.get<any>(this.host + "motoristas/verificados");
  }
  
  /* MOTORISTAS LOS CUALES NO HAN SIDO VERIFICADOS(APROBADOS). */
  motoristasNoVerificados(){
    
    return this.http.get<any>(this.host + "motoristas/faltanVerificar");
  }

  /* CAMBIAR ESTADO DE MOTORISTA A APROBADO. */
  aprobarMotorista(idMotorista:string,data:any){
    let url=this.host + `motoristas/${idMotorista}/verificar`;
    return this.http.put(url,data);
  }

  obtenerDatosAdminAprueba(id:string){
    let url = this.host + `administracion/${id}/datos`;
    return this.http.get<any>(url);
  }
}
