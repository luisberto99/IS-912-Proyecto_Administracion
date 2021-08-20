import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { EmpresasService } from '../empresas.service';
import { CategoriasService } from '../../categorias/categorias.service';

@Component({
  selector: 'app-agregar-empresa',
  templateUrl: './agregar-empresa.component.html',
  styleUrls: ['./agregar-empresa.component.sass']
})
export class AgregarEmpresaComponent implements OnInit {

  newImageSave:any=new FormData();
  previsualizacionLogo:any = '';
  previsualizacionBanner:any = '';
  img:any = '';
  apiKey:any = '57a9e23af9f515ce719613c2abbf4a35';
  formd = new FormData();
  logoUrl = '';
  bannerUrl = '';
  categoriasArray:any = []
  display = false;
  newEmpresa:any = '';
  




  constructor( private sanitizer: DomSanitizer,
               private httpClient:HttpClient,
               private empresasService:EmpresasService,
               private categoriasService:CategoriasService
    ) { }

  empresa = new FormGroup({
    nombreComercialEmpresa: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]),
    RTN: new FormControl('',[
      Validators.required,
    ]),
    direccion: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    descripcion: new FormControl('',[
      Validators.required,
      Validators.minLength(10)
    ]),
    telefono: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15)
    ]),
    categorias: new FormControl([])
  })

  get nombreComercialEmpresa(){
    return this.empresa.get('nombreComercialEmpresa')
  }
  get RTN(){
    return this.empresa.get('RTN')
  }
  get direccion(){
    return this.empresa.get('direccion')
  }
  get descripcion(){
    return this.empresa.get('descripcion')
  }
  get telefono(){
    return this.empresa.get('telefono')
  }
  get categorias(){
    return this.empresa.get('categorias')
  }
  

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe(
       res => {
         this.categoriasArray = res;
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
    if(img == 'logo'){
      this.previsualizacionLogo = image;
    }
    if(img == 'banner'){
      this.previsualizacionBanner = image;
    }

    this.formd.append('image',data);
    
  }

  logoUpload(){
    this.httpClient.post('/api',this.formd, {params:{key: this.apiKey}}).subscribe(
       res => {
         this.logoUrl =res['data'].url
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
    if(this.empresa.valid){
      if(this.logoUrl != ''){
        if(this.bannerUrl != ''){
            console.log(this.empresa.value);
            this.empresasService.addEmpresa(this.empresa.value, this.logoUrl, this.bannerUrl).subscribe(
               res => {
                 console.log(res);
                 this.newEmpresa = res;
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
        this.logoUpload();
      }
    }else{
      console.log("no valido");
      
    }

  }

}
