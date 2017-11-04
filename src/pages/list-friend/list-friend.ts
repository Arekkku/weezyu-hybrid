import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, ToastController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';
import * as Enums from '../search-friends/search-friends';
import { LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list-friend',
  templateUrl: 'list-friend.html'
})
export class ListFriendPage {
  currentItems: any;

  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController, public user: User, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: `
      <div class="custom-spinner-container">
        <div class="custom-spinner-box">Your friends are comming</div>
      </div>`
  });
  loading.present();
    this.user.getFriends("").subscribe((resp) => {
      loading.dismiss();
      if (resp != null)
      {
      this.currentItems = resp['friends'];
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


  delete_friend(id:string){
    this.user.deleteFriend(id).subscribe((resp) => {
      this.ionViewDidLoad();
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "Impossible de supprimer l'ami",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  addFriend(){
    this.navCtrl.push('SearchFriendsPage', {
      type: Enums.Type.Friend
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
