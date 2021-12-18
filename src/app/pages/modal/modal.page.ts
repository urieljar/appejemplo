import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from 'src/app/pagesy/modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
      const modal = await this.modalController.create({
        component: ModalInfoPage,
        componentProps: {
          nombre: 'Etni Uriel',
          apellidos:'López Jarquin',
        }
      });
     // return await modal.present();
     await modal.present();
     const resp = await modal.onDidDismiss();
     console.log(resp.data);
    }

  }


