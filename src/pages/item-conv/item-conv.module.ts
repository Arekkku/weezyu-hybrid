import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ItemConvPage } from './item-conv';

@NgModule({
  declarations: [
    ItemConvPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemConvPage),
    TranslateModule.forChild()
  ],
  exports: [
    ItemConvPage
  ]
})
export class ItemConvPageModule { }
