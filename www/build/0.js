webpackJsonp([0],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFriendPageModule", function() { return ListFriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_friend__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListFriendPageModule = /** @class */ (function () {
    function ListFriendPageModule() {
    }
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
    return ListFriendPageModule;
}());

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
var SearchFriendsPage = /** @class */ (function () {
    function SearchFriendsPage(navCtrl, items, modalCtrl, user, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
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
        console.log(this.fullname);
        this.user.search(this.fullname).subscribe(function (resp) {
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
                    message: "Impossible d'ajouter un ami",
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
    SearchFriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search-friends',template:/*ion-inline-start:"C:\Users\a.chenevier\Documents\weezyu-hybrid\src\pages\search-friends\search-friends.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'SEARCH_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-fab style="margin-right:1%; margin-top:0.2%;"right  (click)="search()">\n\n    <button ion-fab><ion-icon name="search"></ion-icon></button>\n\n  </ion-fab>\n\n  <ion-item>\n\n      <ion-label floating>Fullname</ion-label>\n\n      <ion-input type="text" [(ngModel)]="fullname"></ion-input>\n\n  </ion-item>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of currentItems">\n\n      <ion-avatar item-start>\n\n        <img [src]="item.picture" />\n\n      </ion-avatar>\n\n      <h2>{{item.fullname}}</h2>\n\n      <p>{{item.description}}</p>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n      <button (click)="itemAction(item._id)" item-end style="margin-right:1%; margin-top:0.2%;">+</button>\n\n\n\n    </button>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\a.chenevier\Documents\weezyu-hybrid\src\pages\search-friends\search-friends.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SearchFriendsPage);
    return SearchFriendsPage;
}());

//# sourceMappingURL=search-friends.js.map

/***/ }),

/***/ 324:
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





var ListFriendPage = /** @class */ (function () {
    function ListFriendPage(navCtrl, items, modalCtrl, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListFriendPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user.getFriends("").subscribe(function (resp) {
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
    ListFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list-friend',template:/*ion-inline-start:"C:\Users\a.chenevier\Documents\weezyu-hybrid\src\pages\list-master\list-friend.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let item of currentItems">\n\n      <button ion-item (click)="openItem(item)">\n\n        <ion-avatar item-start>\n\n          <img [src]="item.picture" />\n\n        </ion-avatar>\n\n        <h2>{{item.firstname}}</h2>\n\n        <p>{{item.lastname}}</p>\n\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n\n      </button>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="deleteItem(item)">\n\n          {{ \'DELETE_BUTTON\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-content>\n\n <!-- Real floating action button, fixed. It will not scroll with the content -->\n\n <ion-fab right bottom (click)="addFriend()">\n\n   <button ion-fab>+</button>\n\n </ion-fab>\n\n <ion-fab center bottom (click)="ionViewDidLoad()">\n\n   <button ion-fab><ion-icon name="refresh"></ion-icon></button>\n\n </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\a.chenevier\Documents\weezyu-hybrid\src\pages\list-master\list-friend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ListFriendPage);
    return ListFriendPage;
}());

//# sourceMappingURL=list-friend.js.map

/***/ })

});
//# sourceMappingURL=0.js.map