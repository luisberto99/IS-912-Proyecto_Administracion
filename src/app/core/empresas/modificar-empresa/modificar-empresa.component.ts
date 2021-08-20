import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUpload } from 'primeng/fileupload';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { EmpresasService } from '../empresas.service';
import { CategoriasService } from '../../categorias/categorias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-empresa',
  templateUrl: './modificar-empresa.component.html',
  styleUrls: ['./modificar-empresa.component.sass']
})
export class ModificarEmpresaComponent implements OnInit {

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
  empresaGet:any = '';

empresa = new FormGroup({
    nombreComercialEmpresa: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15)
    ]),
    RTN: new FormControl('res.RTN',[
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
    calificacion: new FormControl("0",[
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(1)
    ]),
    estado: new FormControl("activo",[
      Validators.required
    ]),
    categorias: new FormControl([])
  })
  




  constructor( private sanitizer: DomSanitizer,
               private httpClient:HttpClient,
               private empresasService:EmpresasService,
               private categoriasService:CategoriasService,
               private activatedRoute:ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(params =>{
        this.paramsChange(params.idEmpresa);
        
      });
    }

    paramsChange(idEmpresa:string){

      

      this.empresasService.getEmpresa(idEmpresa).subscribe(
        res => {
          console.log(res);
          this.empresaGet = res
                    
        this.empresa = new FormGroup({
          nombreComercialEmpresa: new FormControl(res.nombreComercialEmpresa,[
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(15)
          ]),
          RTN: new FormControl(res.RTN,[
            Validators.required,
          ]),
          direccion: new FormControl(res.direccion,[
            Validators.required,
            Validators.minLength(10)
          ]),
          descripcion: new FormControl(res.direccion,[
            Validators.required,
            Validators.minLength(10)
          ]),
          telefono: new FormControl(res.telefono,[
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15)
          ]),
          calificacion: new FormControl(res.calificacion,[
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(1)
          ]),
          estado: new FormControl(res.estado,[
            Validators.required
          ]),
          categorias: new FormControl(res.categorias)
        })
        this.logoUrl = res.logo;
        this.bannerUrl = res.banner;
        },
        error => {
          console.log(error);
        }
     );     
    }



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
  get estado(){
    return this.empresa.get('estado')
  }
  get calificacion(){
    return this.empresa.get('calificacion')
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
            this.empresasService.modificarEmpresa(this.empresaGet._id, this.empresa.value, this.logoUrl, this.bannerUrl).subscribe(
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
