/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-sliding',
  templateUrl: './list-sliding.page.html',
  styleUrls: ['./list-sliding.page.scss'],
})
export class ListSlidingPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild(IonList) ionList: IonList;
  constructor(private ds: DataService) { }
  ngOnInit() {
    this.ds.getUsuarios().subscribe(console.log);
    this.usuarios = this.ds.getUsuarios();
  }
  favorite(user) {
    console.log('Favorito', user);
    this.ionList.closeSlidingItems();
  }
  share(user) {
    console.log('compartir', user);
    this.ionList.closeSlidingItems();
  }
  delete(user) {
    console.log('Borrar', user);
    this.ionList.closeSlidingItems();
  }
}
