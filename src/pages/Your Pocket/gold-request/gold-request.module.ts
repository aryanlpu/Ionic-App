import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoldRequestPage } from './gold-request';

@NgModule({
  declarations: [
    GoldRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(GoldRequestPage),
  ],
})
export class GoldRequestPageModule {}
