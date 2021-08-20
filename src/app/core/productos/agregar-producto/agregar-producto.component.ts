import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CategoriasService } from '../../categorias/categorias.service';
import { ProductoService } from '../producto.service';
import { Empresa, EmpresasService } from '../../empresas/empresas.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.sass']
})
export class AgregarProductoComponent implements OnInit {

  newImageSave:any=new FormData();
  previsualizacionImg:any = '';
  previsualizacionBanner:any = '';
  img:any = '';
  apiKey:any = '57a9e23af9f515ce719613c2abbf4a35';
  formd = new FormData();
  imgUrl = '';
  bannerUrl = '';
  display = false;
  newProducto:any = '';
  empresas:Empresa[] = []
  




  constructor( private sanitizer: DomSanitizer,
               private httpClient:HttpClient,
               private productoService:ProductoService,
               private empresaService:EmpresasService
    ) { }

  producto = new FormGroup({
    empresa: new FormControl('',[
      Validators.required
    ]),
    nombreProducto: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    descripcion: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    precio: new FormControl('',[
      Validators.required
    ]),
    categorias: new FormControl([])
  })

  get nombreProducto(){
    return this.producto.get('nombreProducto')
  }
  get descripcion(){
    return this.producto.get('descripcion')
  }
  get precio(){
    return this.producto.get('precio')
  }
  get empresa(){
    return this.producto.get('empresa')
  }

  ngOnInit(): void {
    this.empresaService.getEmpresas().subscribe(
       res => {
         this.empresas = res
       },
       error => {
         console.log(error);
       }
    );
  }

  imgsShow(event:any, img:string){
    var data:File = event.files[0];
    var binaryData = [];
    binaryData.push(data);
    
    const a = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
    const image = this.sanitizer.bypassSecurityTrustUrl(a);
    if(img == 'img'){
      this.previsualizacionImg = image;
    }
    if(img == 'banner'){
      this.previsualizacionBanner = image;
    }

    this.formd.append('image',data);
    
  }

  imgUpload(){
    this.httpClient.post('/api',this.formd, {params:{key: this.apiKey}}).subscribe(
       res => {
         this.imgUrl =res['data'].url
       }
    );
  }

  bannerUpload(){
    this.httpClient.post('/api',this.formd, {params:{key: this.apiKey}}).subscribe(
       res => {
         this.bannerUrl =res['data'].url
       },error => {
        console.log(error);
      }
    );
  }

  guardar(){
    if(this.producto.valid){
      if(this.imgUrl != ''){
        if(this.bannerUrl != ''){
            console.log(this.producto.value);
            this.productoService.addProducto(this.producto.value, this.imgUrl, this.bannerUrl).subscribe(
               res => {
                 console.log(res);
                 this.newProducto = res;
                 this.display = true;
               },
               error => {
                 console.log(error);
               }
            );
        }else{
          this.bannerUpload();
        }
      }else{
        this.imgUpload();
      }
    }else{
      console.log("no valido");
      
    }

  }

}
