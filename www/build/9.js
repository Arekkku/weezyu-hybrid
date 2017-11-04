webpackJsonp([9],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPendingPageModule", function() { return ListPendingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_pending__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListPendingPageModule = (function () {
    function ListPendingPageModule() {
    }
    return ListPendingPageModule;
}());
ListPendingPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__list_pending__["a" /* ListPendingPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_pending__["a" /* ListPendingPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__list_pending__["a" /* ListPendingPage */]
        ]
    })
], ListPendingPageModule);

//# sourceMappingURL=list-pending.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPendingPage; });
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




var ListPendingPage = (function () {
    function ListPendingPage(navCtrl, items, modalCtrl, user, toastCtrl) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.currentItems = [];
    }
    ListPendingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user.getFriends("").subscribe(function (resp) {
            if (resp != null) {
                _this.currentItems = resp['pending'];
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
     * Perform a service for the proper items.
     */
    ListPendingPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    ListPendingPage.prototype.acceptFriend = function (id) {
        var _this = this;
        this.user.acceptFriendRequest(id).subscribe(function (resp) {
            _this.ionViewDidLoad();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Impossible d'ajouter un ami",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    ListPendingPage.prototype.declineFriend = function (id) {
        var _this = this;
        this.user.declineFriendRequest(id).subscribe(function (resp) {
            _this.ionViewDidLoad();
        }, function (err) {
            var toast = _this.toastCtrl.create({
                message: "Impossible d'ajouter un ami",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListPendingPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    return ListPendingPage;
}());
ListPendingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'list-pending',template:/*ion-inline-start:"/Users/arekkku/weezyu-hybrid/src/pages/list-pending/list-pending.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MASTER_PENDING\' | translate }}</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-fab center bottom (click)="ionViewDidLoad()">\n    <button ion-fab><ion-icon name="refresh"></ion-icon></button>\n  </ion-fab>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of currentItems">\n      <button ion-item>\n        <ion-avatar item-start>\n          <img [src]="item.picture" />\n        </ion-avatar>\n        <h2>{{item.firstname}}</h2>\n        <p>{{item.lastname}}</p>\n        <p>{{item.email}}</p>\n        <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n        <button (click)="acceptFriend(item._id)" item-end style="margin-right:1%; margin-top:0.2%;">+</button>\n        <button (click)="declineFriend(item._id)" item-end style="margin-right:1%; margin-top:0.2%;">-</button>\n      </button>\n\n      <ion-item-options>\n        <button ion-button color="danger" (click)="deleteItem(item)">\n          {{ \'DELETE_BUTTON\' | translate }}\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/arekkku/weezyu-hybrid/src/pages/list-pending/list-pending.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
], ListPendingPage);

//# sourceMappingURL=list-pending.js.map

/***/ })

});
//# sourceMappingURL=9.js.map