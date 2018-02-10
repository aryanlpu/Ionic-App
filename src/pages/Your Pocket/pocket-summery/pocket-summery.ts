
import { Component } from '@angular/core';

// Ionic
import { NavController, Events } from "ionic-angular";

// Pages
import { DetailsPage } from "../details/details";
import {PocketProvider} from '../../../providers/pocket/pocket';
import { LoadingController } from 'ionic-angular';
// Side Menu Component
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './../../shared/side-menu-content/models/side-menu-redirect-events';

@Component({
  selector: 'page-pocket-summery',
  templateUrl: 'pocket-summery.html',
	  providers: [PocketProvider]
})
export class PocketSummeryPage {
	public detail:any;

	
	loader:any;
	constructor(private navCtrl: NavController,
				private eventCtrl: Events,public PocketProvider:PocketProvider,public loadingCtrl: LoadingController) {
					this.getdata();

				 }

	dismiss() {
		this.navCtrl.goToRoot;
	  }

	  getdata() {

		this.loader = this.loadingCtrl.create({
		  content: "Please wait...",
		  spinner: 'crescent'
		});
		this.loader.present();
		  this.PocketProvider.getPocketSummary()
		  .then(data => {
			
			this.detail=JSON.stringify(data);
			console.log(this.detail);
			this.hideLoading();
		  });
		}
		hideLoading()
		{
		  this.loader.dismiss();
		}
	  
}

