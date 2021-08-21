import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  constructor(private httpClient:HttpClient) { }

  /* NUMERO DE ORDENES POR COMPRADOR */

  numeroOrdenesPorComprador():Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/charts/ordenesPorCliente');
  }
  numeroOrdenesPorEmpesa():Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/charts/ordenesPorEmpresa');
  }
}
