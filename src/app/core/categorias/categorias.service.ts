import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../empresas/empresas.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor( private httpClient:HttpClient) { }

  getCategorias():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>('http://localhost:3000/categorias/');
 }
}
