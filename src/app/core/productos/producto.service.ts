import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private empresas:Empresa[] = [];
  private categorias:Categoria[] = [];

  constructor(private httpClient:HttpClient) { 

   }


   /* AGREGAR UN NUEVO PRODUCTO */
   addProducto(producto:any ,img:string, banner:string):Observable<any>{
    return this.httpClient.post<Producto[]>(`http://localhost:3000/empresas/:${producto.empresa}/productos`,{producto, img, banner});
   }
  /* OBTENER PRODUCTOS */
   getProductos():Observable<Producto[]>{
      return this.httpClient.get<Producto[]>('http://localhost:3000/productos/');
   }

   /* MODIFICAR UN PRODUCTO */
   modificarProducto(id:string, producto:any,img:string, banner:string):Observable<any>{
    return this.httpClient.put<Producto[]>('http://localhost:3000/productos/'+id,{producto, img, banner});
   }

  /* OBTENER UN PRODUCTO */
   getProducto(id:String):Observable<Producto>{
    return this.httpClient.get<Producto>('http://localhost:3000/productos/'+id,{});
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