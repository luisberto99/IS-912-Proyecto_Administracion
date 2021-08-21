import { Orden } from './../../models/ordenes';
import { Component, OnInit } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes/ordenes.service';
import {DialogModule} from 'primeng/dialog';
import { Motorista } from 'src/app/models/motorista';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.sass']
})
export class OrdenesComponent implements OnInit {

  ordenes:Orden[] =[];
  display: boolean = false;
  motoristas:Motorista[]=[]
  idMotoristaSeleccionado:string []=[];
  ordenSeleccionada = "";
  constructor(private ordenesService:OrdenesService) { }

  ngOnInit(): void {

    this.ordenesService.getOrdenesDisponibles().subscribe(res =>{
      // console.log(res);
      this.ordenes = res;
    })

    this.ordenesService.obtenerMotoristasDisponibles().subscribe(res =>{
      // console.log(res);
      this.motoristas = res;
      // console.log(this.motoristas);
          
    })
  }

  showDialog(id:string) {

    this.ordenSeleccionada = id;
    
    if(this.display){
      this.display = false;
    }else{

      this.display = true;
    }
  }


  selectMotorista(id:string,nombre:string,apellido:string){
    // console.log(id);
    this.idMotoristaSeleccionado[0] =id;
    this.idMotoristaSeleccionado[1] = nombre;
    this.idMotoristaSeleccionado[2] = apellido;
    
  }
  
  asignarOrdenMotorista(){
    console.log(this.idMotoristaSeleccionado);

    this.ordenesService.AsignarMotoristaOrden({
      idOrden:this.ordenSeleccionada,
      idMotorista:this.idMotoristaSeleccionado[0],
      nombreMotorista:this.idMotoristaSeleccionado[1],
      apellido:this.idMotoristaSeleccionado[2]}
      ).subscribe(res =>{
        console.log(res,1);
        if(res){
          this.actualizarEstadoActualMotorista(this.idMotoristaSeleccionado[0])
        }
        
      })
  }

  actualizarEstadoActualMotorista(idMotorista:string){
    this.ordenesService.actualizarEstadoMotorista({id:idMotorista,estado:'Entregando Orden'}).subscribe(res =>{
      console.log(res,2);
      if(res){
        this.ngOnInit();
        this.display = false;
      }
    })
  }
}
