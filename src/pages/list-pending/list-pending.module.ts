import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ListPendingPage } from './list-pending';

@NgModule({
  declarations: [
    ListPendingPage,
  ],
  imports: [
    IonicPageModule.forChild(ListPendingPage),
    TranslateModule.forChild()
  ],
  exports: [
    ListPendingPage
  ]
})
export class ListPendingPageModule { }
