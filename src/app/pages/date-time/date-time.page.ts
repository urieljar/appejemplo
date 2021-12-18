import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
fecha: Date = new Date();

customPckerOptions = {
  buttons:[
    {
      text:"Cancelar",
      handler:(event) => {
        console.log(event);
      }
    },{
      text:"Seleccionar",
      handler: (event) =>{
        console.log("Pulsaste Seleccionar!!");
      }
    }
  ]
};

customYearValues = ['2030','2021','2008','1977'];

  constructor() { }

  ngOnInit() {
  }
   cambiarFecha (evt){
     console.log(new Date(evt.detail.value));
   }
}
