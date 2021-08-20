import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private http:HttpClient ) { }

  /* MOTORISTAS VERIFICADOS PARA PODER REALIZAR ENTREGAS. */
  motoristasVerificados(){
    
    return this.http.get<any>("http://localhost:3000/motoristas/verificados");
  }
  
  /* MOTORISTAS LOS CUALES NO HAN SIDO VERIFICADOS(APROBADOS). */
  motoristasNoVerificados(){
    
    return this.http.get<any>("http://localhost:3000/motoristas/faltanVerificar");
  }

  /* CAMBIAR ESTADO DE MOTORISTA A APROBADO. */
  aprobarMotorista(idMotorista:string,data:any){
    let url=`http://localhost:3000/motoristas/${idMotorista}/verificar`;
    return this.http.put(url,data);
  }

  obtenerDatosAdminAprueba(id:string){
    let url = `http://localhost:3000/administracion/${id}/datos`;
    return this.http.get<any>(url);
  }
}
