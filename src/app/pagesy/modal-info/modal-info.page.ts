import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
@Input() nombre: string;
@Input() apellidos: string;
  constructor(private modelController: ModalController) { }
  ngOnInit() {
  }
  sinArgumentos(){
    this.modelController.dismiss();
  }
  conArgumentos(){
    this.modelController.dismiss({
      nombre:'Etni Uriel',
      apellidos:'López Jarquín'
    });
  }
}
