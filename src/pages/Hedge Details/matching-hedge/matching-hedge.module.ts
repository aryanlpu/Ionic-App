import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchingHedgePage } from './matching-hedge';

@NgModule({
  declarations: [
    MatchingHedgePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchingHedgePage),
  ],
})
export class MatchingHedgePageModule {}
