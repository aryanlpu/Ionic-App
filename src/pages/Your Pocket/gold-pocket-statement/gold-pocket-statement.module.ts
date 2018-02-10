import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoldPocketStatementPage } from './gold-pocket-statement';

@NgModule({
  declarations: [
    GoldPocketStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(GoldPocketStatementPage),
  ],
})
export class GoldPocketStatementPageModule {}
