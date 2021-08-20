import { Component, OnInit } from '@angular/core';
import { MotoristasService } from 'src/app/services/motoristas/motoristas.service';
import { Motorista } from 'src/app/models/motorista';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.sass']
})
export class MotoristasComponent implements OnInit {

  motoristas:Motorista[]=[]
  motoristasNoAprobados:Motorista[]=[]

  constructor(private motoristasService:MotoristasService) { }

  ngOnInit(): void {

    this.motoristasService.motoristasVerificados().subscribe(res =>{
      this.motoristas = res;
      /* FUNCION ENCARGADA DE VERFICIAR SI EL USUARIO TIENE IMAGEN DE PERFIL
      DE NO TENER, SE LE ASIGNARA UNA IMAGEN PARA DAR UNA VISTA PREVIA MEJOR Y
      MOSTRAR QUE UN NO TIENE IAMGEN DE PERFIL.. */
      this.actualizarImagenMotorista(this.motoristas);
      // console.log(this.motoristas);
    })
    
    this.motoristasService.motoristasNoVerificados().subscribe(result =>{
      this.motoristasNoAprobados = result;
      this.actualizarImagenMotorista(this.motoristasNoAprobados);
      // console.log(this.motoristasNoAprobados);
    })
  }


  verificarMotorista(idMotorista:string){
    let userAdmin = `${window.localStorage.getItem('user')}`;

    this.motoristasService.obtenerDatosAdminAprueba(userAdmin).subscribe(res =>{
      // console.log(res);
      this.aprobarMotorista(idMotorista,userAdmin,res.primerApellido,res.primerNombre);

    })
  }

  aprobarMotorista(idMotorista:string,idAdmin:string,apellido:string,nombre:string){
    this.motoristasService.aprobarMotorista(idMotorista,{idAdmin:idAdmin,apellidoAdmin:apellido,nombreAdmin:nombre}).subscribe(result =>{
      console.log(result);
      this.ngOnInit();
      
    })

  }

  actualizarImagenMotorista(data:Motorista[]){
    for (let i = 0; i < data.length; i++) {
      if(data[i].imagenPerfil == ""){
        data[i].imagenPerfil = "/assets/img/user.png";
      }
      
    }
  }
}
