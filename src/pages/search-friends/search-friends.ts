import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';

export enum Type{
  Friend = 1,
  Conversations = 2
}

@IonicPage()
@Component({
  selector: 'page-search-friends',
  templateUrl: 'search-friends.html'
})
export class SearchFriendsPage {

  currentItems: any = [];
  fullname: any;
  currentType: Type;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public user: User, public toastCtrl: ToastController, private navParams: NavParams) {
    this.currentType = navParams.get("type");
    console.log(this.currentType);
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

  search(){
    console.log(this.fullname);
    this.user.search(this.fullname).subscribe((resp) => {
      if (resp != null)
      {
      this.currentItems = resp;
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

  itemAction(id:string){
    if (this.currentType == Type.Friend){
      this.user.addFriend(id).subscribe((resp) => {
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Impossible d'ajouter un ami",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    } else {
      this.user.createConversation(id).subscribe((resp) => {
      }, (err) => {
        let toast = this.toastCtrl.create({
          message: "Impossible d'ajouter un ami",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      });
    }
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