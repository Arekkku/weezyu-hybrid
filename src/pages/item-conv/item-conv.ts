import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-item-conv',
  templateUrl: 'item-conv.html'
})
export class ItemConvPage {
  item: any;
  id: string;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public user: User, public toastCtrl: ToastController, private navParams: NavParams) {
    this.id = navParams.get("item");
  }

  ionViewDidLoad() {

    this.user.getConversationid(this.id).subscribe((resp) => {
      console.log(resp);
      this.item = resp;
    }, (err) => {
    //this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "Erreur à la recuperation des conversations",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
