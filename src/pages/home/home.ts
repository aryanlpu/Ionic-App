// Angular
import { Component } from '@angular/core';

// Ionic
import { NavController, Events } from "ionic-angular";

// Pages
import { DetailsPage } from "../details/details";
import {UserProvider} from '../../providers/user/user';
import { LoadingController } from 'ionic-angular';
// Side Menu Component
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from './../../shared/side-menu-content/models/side-menu-redirect-events';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	  providers: [UserProvider]
})
export class HomePage {
	public userDetail:any;

	public detail:any;

	
	loader:any;
	constructor(private navCtrl: NavController,
				private eventCtrl: Events,public UserProvider:UserProvider,public loadingCtrl: LoadingController) {
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
		  this.UserProvider.getProfile()
		  .then(data => {
			// this.userDetail =JSON.stringify(data);
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
