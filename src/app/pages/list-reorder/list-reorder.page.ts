import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
elementos: string[] =['Ir al cine','Ordenar la recamara','Visitar a la toxica','Reprovar a mis alumnos'];
reorder = true;
// eslint-disable-next-line @typescript-eslint/member-ordering
@ViewChild(IonReorderGroup) reorderGrup: IonReorderGroup;
  constructor() { }
  ngOnInit() {
  }
  doReorder(event){
    console.log(event);
    console.log(this.elementos);
    this.elementos = event.detail.complete(this.elementos);
    console.log(this.elementos);
  }
  reOrdenar(){
    this.reorder = !this.reorder;
  }
}
