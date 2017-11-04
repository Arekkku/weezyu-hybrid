webpackJsonp([0],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFriendPageModule", function() { return ListFriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_friend__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListFriendPageModule = (function () {
    function ListFriendPageModule() {
    }
    return ListFriendPageModule;
}());
ListFriendPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__list_friend__["a" /* ListFriendPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_friend__["a" /* ListFriendPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__list_friend__["a" /* ListFriendPage */]
        ]
    })
], ListFriendPageModule);

//# sourceMappingURL=list-friend.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Type;
(function (Type) {
    Type[Type["Friend"] = 1] = "Friend";
    Type[Type["Conversations"] = 2] = "Conversations";
})(Type || (Type = {}));
var SearchFriendsPage = (function () {
    function SearchFriendsPage(navCtrl, items, modalCtrl, user, toastCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.currentItems = [];
        this.currentType = navParams.get("type");
        console.log(this.currentType);
    }
    /**
     * Perform a service for the proper items.
     */
    SearchFriendsPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    SearchFriendsPage.prototype.search = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">Your friends are coming</div>\n      </div>"
        });
        loading.present();
        console.log(this.fullname);
        this.user.search(this.fullname).subscribe(function (resp) {
            loading.dismiss();
            if (resp != null) {
                _this.currentItems = resp;
            }
        }, function (err) {
            //this.navCtrl.push(MainPage);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: "Erreur à la recuperation des conversations",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    SearchFriendsPage.prototype.itemAction = function (id) {
        var _this = this;
        if (this.currentType == Type.Friend) {
            this.user.addFriend(id).subscribe(function (resp) {
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "Impossible d'ajouter un ami",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
        else {
            this.user.createConversation(id).subscribe(function (resp) {
            }, function (err) {
                var toast = _this.toastCtrl.create({
                    message: "Impossible de créer une conversation",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            });
        }
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchFriendsPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    return SearchFriendsPage;
}());
SearchFriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-friends',template:/*ion-inline-start:"/Users/arekkku/weezyu-hybrid/src/pages/search-friends/search-friends.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-fab style="margin-right:1%; margin-top:0.2%;"right  (click)="search()">\n    <button ion-fab><ion-icon name="search"></ion-icon></button>\n  </ion-fab>\n  <ion-item>\n      <ion-label floating>Fullname</ion-label>\n      <ion-input type="text" [(ngModel)]="fullname"></ion-input>\n  </ion-item>\n  <ion-list>\n    <button ion-item *ngFor="let item of currentItems">\n      <ion-avatar item-start>\n        <img [src]="item.picture" />\n      </ion-avatar>\n      <h2>{{item.fullname}}</h2>\n      <p>{{item.description}}</p>\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n      <button (click)="itemAction(item._id)" item-end style="margin-right:1%; margin-top:0.2%;">+</button>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/arekkku/weezyu-hybrid/src/pages/search-friends/search-friends.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], SearchFriendsPage);

//# sourceMappingURL=search-friends.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_friends_search_friends__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListFriendPage = (function () {
    function ListFriendPage(navCtrl, items, modalCtrl, user, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListFriendPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\">Your friends are comming</div>\n      </div>"
        });
        loading.present();
        this.user.getFriends("").subscribe(function (resp) {
            loading.dismiss();
            if (resp != null) {
                _this.currentItems = resp['friends'];
            }
        }, function (err) {
            //this.navCtrl.push(MainPage);
            // Unable to log in
            var toast = _this.toastCtrl.create({
                message: "Erreur à la recuperation des conversations",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    ListFriendPage.prototype.delete_friend = function (id) {
        var _this = this;
        this.user.deleteFriend(id).subscribe(function (resp) {
            _this.ionViewDidLoad();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Impossible de supprimer l'ami",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    /**
     * Prompt the user to add a new item. This shows our ItemCreatePage in a
     * modal and then adds the new item to our data source if the user created one.
     */
    ListFriendPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ItemCreatePage');
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.items.add(item);
            }
        });
        addModal.present();
    };
    /**
     * Delete an item from the list of items.
     */
    ListFriendPage.prototype.deleteItem = function (item) {
        this.items.delete(item);
    };
    ListFriendPage.prototype.addFriend = function () {
        this.navCtrl.push('SearchFriendsPage', {
            type: __WEBPACK_IMPORTED_MODULE_3__search_friends_search_friends__["b" /* Type */].Friend
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListFriendPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    return ListFriendPage;
}());
ListFriendPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list-friend',template:/*ion-inline-start:"/Users/arekkku/weezyu-hybrid/src/pages/list-friend/list-friend.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MASTER_FRIEND\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems">\n      <button ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.picture" />\n        </ion-avatar>\n        <h2>{{item.firstname}}</h2>\n        <p>{{item.lastname}}</p>\n        <button (click)="delete_friend(item._id)" item-end style="margin-right:1%; margin-top:0.2%;">x</button>\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom (click)="addFriend()">\n    <button ion-fab>+</button>\n  </ion-fab>\n  <ion-fab center bottom (click)="ionViewDidLoad()">\n    <button ion-fab><ion-icon name="refresh"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/arekkku/weezyu-hybrid/src/pages/list-friend/list-friend.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ListFriendPage);

//# sourceMappingURL=list-friend.js.map

/***/ })

});
//# sourceMappingURL=0.js.map