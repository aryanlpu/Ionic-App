import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PocketSummeryPage } from './pocket-summery';

@NgModule({
  declarations: [
    PocketSummeryPage,
  ],
  imports: [
    IonicPageModule.forChild(PocketSummeryPage),
  ],
})
export class PocketSummeryPageModule {}
