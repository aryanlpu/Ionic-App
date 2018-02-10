import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketReceivedPage } from './ticket-received';

@NgModule({
  declarations: [
    TicketReceivedPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketReceivedPage),
  ],
})
export class TicketReceivedPageModule {}
