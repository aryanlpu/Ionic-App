import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchingAccountPage } from './matching-account';

@NgModule({
  declarations: [
    MatchingAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchingAccountPage),
  ],
})
export class MatchingAccountPageModule {}
