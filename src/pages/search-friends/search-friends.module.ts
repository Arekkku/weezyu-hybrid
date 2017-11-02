import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { SearchFriendsPage } from './search-friends';

@NgModule({
  declarations: [
    SearchFriendsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFriendsPage),
    TranslateModule.forChild()
  ],
  exports: [
    SearchFriendsPage
  ]
})
export class SearchFriendsPageModule { }
