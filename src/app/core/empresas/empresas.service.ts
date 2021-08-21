import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private empresas:Empresa[] = [];
  private categorias:Categoria[] = [];

  constructor(private httpClient:HttpClient) { 

   }

   /* AGREGAR UNA NUEVA EMPRESA */
   addEmpresa(empresa:any,logo:string, banner:string):Observable<any>{
    return this.httpClient.post<Empresa[]>('http://localhost:3000/empresas/',{empresa, logo, banner});
   }
  /* OBTENER UNA EMPRESA */
   getEmpresas():Observable<Empresa[]>{
      return this.httpClient.get<Empresa[]>('http://localhost:3000/empresas/');
   }

   /* MODIFICAR UNA EMPRESA */
   modificarEmpresa(id:string, empresa:any,logo:string, banner:string):Observable<any>{
    return this.httpClient.put<Empresa[]>('http://localhost:3000/empresas/'+id,{empresa, logo, banner});
   }
  /* OBTENER UNA EMPRESA */
   getEmpresa(id:String):Observable<Empresa>{
    return this.httpClient.get<Empresa>('http://localhost:3000/empresas/'+id,{});
   }

} 



export interface Empresa{
  nombreComercialEmpresa: string,
    RTN: string,
    direccion: string,
    logo: string,
    banner: string,
    descripcion: string,
    telefono: string,
    estado: string,
    productosEmpresa: Producto[],
    categorias: any[],
    calificacion: number
}

export interface Producto{
  nombreProducto: string,
  imagenProducto: any, 
  imagenesCarrusel:any[], //carrucel
  descripcion: string,
  precio: number
}

export interface Categoria{
  id:number,
  nombreCategoria: string,
  icono: string
}