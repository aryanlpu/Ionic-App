import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvailableTicketPage } from './available-ticket';

@NgModule({
  declarations: [
    AvailableTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(AvailableTicketPage),
  ],
})
export class AvailableTicketPageModule {}
