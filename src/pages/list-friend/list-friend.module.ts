import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListFriendPage } from './list-friend';

@NgModule({
  declarations: [
    ListFriendPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFriendPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListFriendPage
  ]
})
export class ListFriendPageModule { }
