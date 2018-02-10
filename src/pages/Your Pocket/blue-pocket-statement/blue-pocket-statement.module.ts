import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BluePocketStatementPage } from './blue-pocket-statement';

@NgModule({
  declarations: [
    BluePocketStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(BluePocketStatementPage),
  ],
})
export class BluePocketStatementPageModule {}
