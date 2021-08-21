import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChatsService } from '../../../../services/chats.service';
Chart.register(...registerables);


@Component({
  selector: 'app-numero-de-ordenes-por-empresa',
  templateUrl: './numero-de-ordenes-por-empresa.component.html',
  styleUrls: ['./numero-de-ordenes-por-empresa.component.sass']
})
export class NumeroDeOrdenesPorEmpresaComponent implements OnInit {
  ctx:any = ''
  myChart:any = ''
  constructor( private chartsService:ChatsService) { }

  ngOnInit(): void {

    this.chartsService.numeroOrdenesPorEmpesa().subscribe(
       res => {
         console.log(res)
        let resp = res
         let id:any = []
         let num:any = []

         resp.forEach(element => {
             id.push(element._id);
             num.push(element.count);
         });
         console.log(id);
         

         this.ctx = document.getElementById('chart1') as HTMLCanvasElement;
         this.myChart = new Chart(this.ctx, {
             type: 'pie',
             data: {
                 labels: id,
                 datasets: [{
                     label: 'Numero de pedidos por usuario',
                     data: num,
                     backgroundColor: [
                      'rgb(255, 99, 132)',
                      'rgb(75, 192, 192)',
                      'rgb(255, 205, 86)',
                      'rgb(201, 203, 207)',
                      'rgb(54, 162, 235)'
                    ],
                     borderColor: [
                         'rgba(255, 99, 132, 1)',
                         'rgba(54, 162, 235, 1)',
                         'rgba(255, 206, 86, 1)',
                         'rgba(75, 192, 192, 1)',
                         'rgba(153, 102, 255, 1)',
                         'rgba(255, 159, 64, 1)'
                     ],
                     borderWidth: 1
                 }]
             },
             options: {
                 scales: {
                     y: {
                         beginAtZero: true
                     }
                 }
             }
         });
       },
       error => {
         console.log(error);
       }
    );




  }


}
