import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListConvPage } from './list-conv';

@NgModule({
  declarations: [
    ListConvPage,
  ],
  imports: [
    IonicPageModule.forChild(ListConvPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListConvPage
  ]
})
export class ListConvPageModule { }
