webpackJsonp([11],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConvPageModule", function() { return ItemConvPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_conv__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemConvPageModule = (function () {
    function ItemConvPageModule() {
    }
    return ItemConvPageModule;
}());
ItemConvPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__item_conv__["a" /* ItemConvPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_conv__["a" /* ItemConvPage */]),
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__item_conv__["a" /* ItemConvPage */]
        ]
    })
], ItemConvPageModule);

//# sourceMappingURL=item-conv.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemConvPage; });
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




var ItemConvPage = (function () {
    function ItemConvPage(navCtrl, items, modalCtrl, user, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.id = navParams.get("item");
    }
    ItemConvPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.user.getConversationid(this.id).subscribe(function (resp) {
            console.log(resp);
            _this.item = resp;
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
    return ItemConvPage;
}());
ItemConvPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-item-conv',template:/*ion-inline-start:"/Users/arekkku/weezyu-hybrid/src/pages/item-conv/item-conv.html"*/'<!--\n  Generated template for the Chat page.\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>{{toUser.name}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="message-wrap">\n\n        <div *ngFor="let msg of msgList"\n             class="message"\n             [class.left]=" msg.userId === toUser.id "\n             [class.right]=" msg.userId === user.id ">\n            <img class="user-img" [src]="msg.userAvatar" alt="" src="">\n            <ion-spinner name="dots" *ngIf="msg.status === \'pending\'"></ion-spinner>\n            <div class="msg-detail">\n                <div class="msg-info">\n                    <p>\n                        {{msg.userName}}&nbsp;&nbsp;&nbsp;{{msg.time | relativeTime}}</p>\n                </div>\n                <div class="msg-content">\n                    <span class="triangle"></span>\n                    <p class="line-breaker ">{{msg.message}}</p>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n    <ion-grid class="input-wrap">\n        <ion-row>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n                    <ion-icon name="md-happy"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-8>\n                <ion-textarea #chat_input\n                              placeholder="Text Input"\n                              [(ngModel)]="editorMsg"\n                              (keyup.enter)="sendMsg()"\n                              (focus)="onFocus()">\n                </ion-textarea>\n            </ion-col>\n            <ion-col col-2>\n                <button ion-button clear icon-only item-right (click)="sendMsg()">\n                    <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n    <emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="editorMsg"></emoji-picker>\n</ion-footer>\n'/*ion-inline-end:"/Users/arekkku/weezyu-hybrid/src/pages/item-conv/item-conv.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* User */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ItemConvPage);

//# sourceMappingURL=item-conv.js.map

/***/ })

});
//# sourceMappingURL=11.js.map