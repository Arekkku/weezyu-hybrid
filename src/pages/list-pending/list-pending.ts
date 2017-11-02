import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'list-pending',
  templateUrl: 'list-pending.html'
})
export class ListPendingPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public user: User, public toastCtrl: ToastController) {
}
ionViewDidLoad() {
  this.user.getFriends("").subscribe((resp) => {
    if (resp != null)
    {
    this.currentItems = resp['pending'];
  }
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
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  acceptFriend(id:string){
    this.user.acceptFriendRequest(id).subscribe((resp) => {
      this.ionViewDidLoad();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Impossible d'ajouter un ami",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  declineFriend(id:string){
    this.user.declineFriendRequest(id).subscribe((resp) => {
      this.ionViewDidLoad();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Impossible d'ajouter un ami",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
