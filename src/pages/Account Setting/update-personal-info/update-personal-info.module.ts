import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdatePersonalInfoPage } from './update-personal-info';

@NgModule({
  declarations: [
    UpdatePersonalInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdatePersonalInfoPage),
  ],
})
export class UpdatePersonalInfoPageModule {}
