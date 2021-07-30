import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private empresas:Empresa[] = [];
  private categorias:Categoria[] = [];

  constructor() { 
    this.llenarEmpresas();
    this.llenarCategorias();
   }

   getEmpresas():Empresa[]{
      return this.empresas;
   }

   getProductos():Producto[]{
     return this.empresas[0].productosEmpresa;
   }

   getCategorias():Categoria[]{
      return this.categorias;
   }

   getCategoria(id:number):Categoria{
     /* TODO buscar por id */
     return this.categorias[id];
   }

   getEmpresasPorCategoria(id:number):Empresa[]{
     /* TODO BUSCAR LAS EMPRESAS QUE PERTENECEN A LA CATEGORIA ID */
     return this.empresas;
   }

   getEmpresa(id:number):Empresa{
     /* TODO BUSCAR EMPRESA */
    return this.empresas[0];
   }

   getProducto(id:number){
    /* TODO BUSCAR PRODUCTO POR SU ID */
     return this.empresas[0].productosEmpresa[0];
  }

   llenarCategorias(){
     for (let i = 0; i < 6; i++) {
       this.categorias.push({
        id: i,
        nombreCategoria: "Categoria " + i,
        icono: ""
       })
     }
   }


   
  /* GENERA LAS EMPRESAS Y SUS PRODUCTOS */
   llenarEmpresas(){
     let Productos:Producto[] = [];
     for (let i = 0; i < 50; i++) {
      Productos.push({
        nombreProducto: "Producto" + i,
            imagenProducto: [
              "https://i.picsum.photos/id/866/200/200.jpg?hmac=i0ngmQOk9dRZEzhEosP31m_vQnKBQ9C19TBP1CGoIUA"
            ],
            imagenesCarrusel:[
              "https://i.picsum.photos/id/866/400/200.jpg?hmac=RWo6-RXf6jQ7JOknMozr8Z8svD1i0F9m1XGfTlNyVKM",
              "https://i.picsum.photos/id/905/400/200.jpg?hmac=t0kh1Ah1ZLgOZFCfEzhuxRihZXl0QwSRO61LXB1LgDM",
              "https://i.picsum.photos/id/866/400/200.jpg?hmac=RWo6-RXf6jQ7JOknMozr8Z8svD1i0F9m1XGfTlNyVKM",
              "https://i.picsum.photos/id/905/400/200.jpg?hmac=t0kh1Ah1ZLgOZFCfEzhuxRihZXl0QwSRO61LXB1LgDM",
              "https://i.picsum.photos/id/866/400/200.jpg?hmac=RWo6-RXf6jQ7JOknMozr8Z8svD1i0F9m1XGfTlNyVKM",
              "https://i.picsum.photos/id/905/400/200.jpg?hmac=t0kh1Ah1ZLgOZFCfEzhuxRihZXl0QwSRO61LXB1LgDM",
            ], //carrucel
            descripcion:"ajsf lasd iejoia falkdfj oqiaal skdjfi ",
            precio: (Math.random()*(1000 - 1) + 1)
      });
       this.empresas.push({
        nombreComercialEmpresa: "Empresa " + i,
        RTN: "1000" + i,
        direccion: "",
        logo: "logo.png",
        banner: "https://i.picsum.photos/id/693/400/200.jpg?hmac=3nQMQ1piaV-D4MgR_75W56sDPo9oae_JQmJIUOxwp4U",
        descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        telefonoEmpresa: "",
        estado: i%2,
        productosEmpresa: Productos,
        categorias: [],
        calificacion: Math.random() * (5 - 1) + 1
       });
       
     }
   }


}



export interface Empresa{
  nombreComercialEmpresa: string,
    RTN: string,
    direccion: string,
    logo: string,
    banner: string,
    descripcion: string,
    telefonoEmpresa: string,
    estado: number,
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