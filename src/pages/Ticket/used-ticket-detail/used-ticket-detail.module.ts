import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsedTicketDetailPage } from './used-ticket-detail';

@NgModule({
  declarations: [
    UsedTicketDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UsedTicketDetailPage),
  ],
})
export class UsedTicketDetailPageModule {}
