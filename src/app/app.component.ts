
// Angular
import { Component, ViewChild } from '@angular/core';

// RxJS
import { ReplaySubject } from "rxjs/ReplaySubject";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";

// Ionic
import { Nav, Platform, MenuController, AlertController } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { UpdateAccountPage } from '../pages/Account Information/update-account/update-account';
import { UpdateAccountListPage} from '../pages/Account Information/update-account-list/update-account-list';
import { AccountLogReportPage } from '../pages/Account Setting/account-log-report/account-log-report';
import { SetAccountPasswordPage } from '../pages/Account Setting/set-account-password/set-account-password';
import { UpdatePersonalInfoPage } from '../pages/Account Setting/update-personal-info/update-personal-info';
import { FrontlineHedgePage} from '../pages/Hedge Details/frontline-hedge/frontline-hedge';
import { HedgeSummeryPage} from '../pages/Hedge Details/hedge-summery/hedge-summery';
import { MatchingHedgePage} from '../pages/Hedge Details/matching-hedge/matching-hedge';
import { ProfitHedgePage} from '../pages/Hedge Details/profit-hedge/profit-hedge';
import { ReferalHedgePage} from '../pages/Hedge Details/referal-hedge/referal-hedge';
import { UplineHedgePage} from '../pages/Hedge Details/upline-hedge/upline-hedge';
import { WidthdrawlHistoryPage} from '../pages/Hedge Details/widthdrawl-history/widthdrawl-history';
import { DirectReferalPage} from '../pages/Internal Body/direct-referal/direct-referal';
import { MatchingAccountPage} from '../pages/Internal Body/matching-account/matching-account';
import { TeamReferalPage} from '../pages/Internal Body/team-referal/team-referal';
import { ReferralProgramPage} from '../pages/referral-program/referral-program';
import { SupportPage } from '../pages/support/support';
import { AvailableTicketPage} from '../pages/Ticket/available-ticket/available-ticket';
import { TicketReceivedPage} from '../pages/Ticket/ticket-received/ticket-received';
import { TicketTransferedPage} from '../pages/Ticket/ticket-transfered/ticket-transfered';
import { UsedTicketDetailPage} from '../pages/Ticket/used-ticket-detail/used-ticket-detail';
import { BluePocketStatementPage} from '../pages/Your Pocket/blue-pocket-statement/blue-pocket-statement';
import { GreenPocketStatementPage} from '../pages/Your Pocket/green-pocket-statement/green-pocket-statement';
import { GoldPocketStatementPage} from '../pages/Your Pocket/gold-pocket-statement/gold-pocket-statement';
import { GoldRequestPage} from '../pages/Your Pocket/gold-request/gold-request';
import { PocketSummeryPage} from '../pages/Your Pocket/pocket-summery/pocket-summery';
import { RhfCoinSellHistoryPage} from '../pages/Your Pocket/rhf-coin-sell-history/rhf-coin-sell-history';
import { RhfCoinStatementPage} from '../pages/Your Pocket/rhf-coin-statement/rhf-coin-statement';
import { LoginPage} from '../pages/login/login';
// Side Menu Component
import { SideMenuContentComponent } from './../shared/side-menu-content/side-menu-content.component';
import { SideMenuSettings } from './../shared/side-menu-content/models/side-menu-settings';
import { MenuOptionModel } from './../shared/side-menu-content/models/menu-option-model';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) navCtrl: Nav;

	// Get the instance to call the public methods
	@ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

	public rootPage: any = LoginPage;

	// Options to show in the SideMenuComponent
	public options: Array<MenuOptionModel>;

	// Settings for the SideMenuComponent
	public sideMenuSettings: SideMenuSettings = {
		accordionMode: true,
		showSelectedOption: true,
		selectedOptionClass: 'active-side-menu-option',
		subOptionIndentation: {
			md: '56px',
			ios: '64px',
			wp: '56px'
		}
	};

	private unreadCountObservable: any = new ReplaySubject<number>(0);

	constructor(private platform: Platform,
				private statusBar: StatusBar,
				private splashScreen: SplashScreen,
				private alertCtrl: AlertController,
				private menuCtrl: MenuController) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleLightContent();
			this.splashScreen.show();

			// Initialize some options
			this.initializeOptions();
		});

		// Change the value for the batch every 5 seconds
		setInterval(() => {
			this.unreadCountObservable.next(Math.floor(Math.random() * 10));
		}, 5000);

	}

	private initializeOptions(): void {
		this.options = new Array<MenuOptionModel>();

		// Load simple menu options
		// ------------------------------------------
		this.options.push({
			iconName: 'keypad',
			displayName: 'Dashboard',
			component: HomePage,

			// This option is already selected
			selected: true
		});

		// this.options.push({
		// 	iconName: 'settings',
		// 	displayName: 'Account Setting',
		// 	component: DetailsPage
		// });

		this.options.push({
			displayName: 'Account Setting',
			iconName: 'settings',
			subItems: [
				{
					// iconName: 'contact',
					displayName: 'Update Personal Info',
					component: UpdatePersonalInfoPage
				},
				{
					// iconName: 'lock',
					displayName: 'Set Account Password',
					component: SetAccountPasswordPage
				},
				{
					// iconName: 'list-box',
					displayName: 'Account Log Report',
					component: AccountLogReportPage
				}
			]
		});

		this.options.push({
			iconName: 'color-palette',
			displayName: 'Internal Body',
			subItems: [
				{
					
					displayName: 'Direct Referal',
					component: DirectReferalPage
				},
				{
					
					displayName: 'Team Referal Detail',
					component: TeamReferalPage
				},
				{
				
					displayName: 'Matching Accounts',
					component: MatchingAccountPage
				}
			]
		
		});
		this.options.push({
			iconName: 'list-box',
			displayName: 'Ticket',
			subItems: [
				{
					
					displayName: 'Available Ticket',
					component: AvailableTicketPage
				},
				{
					
					displayName: 'Used Ticket Detail',
					component: UsedTicketDetailPage
				},
				{
				
					displayName: 'Ticket Transfered',
					component: TicketTransferedPage
				},
				{
				
					displayName: 'Ticket Received',
					component: TicketReceivedPage
				}
			]
		
		});
		this.options.push({
			iconName: 'card',
			displayName: 'Your Pocket',
			subItems: [
				{
					
					displayName: 'Gold $ Request',
					component: GoldRequestPage
				},
				{
					
					displayName: 'Pocket Summery',
					component: PocketSummeryPage
				},
				{
					
					displayName: 'Gold Pocket Statement',
					component: GoldPocketStatementPage
				},
				{
					
					displayName: 'Green Pocket Statement',
					component: GreenPocketStatementPage
				},
				{
					
					displayName: 'Blue Pocket Statement',
					component: BluePocketStatementPage
				},
				{
					
					displayName: 'RHF Coin Statement',
					component: RhfCoinStatementPage
				},
				{
					
					displayName: 'RHF Coin Sell History',
					component: RhfCoinSellHistoryPage
				}
				
			]
		
		});
		this.options.push({
			iconName: 'information',
			displayName: 'Account Information',
			subItems: [
				{
					
					displayName: 'Update Account',
					component: UpdateAccountPage
				},
				{
					
					displayName: 'Update Account List',
					component: UpdateAccountListPage
				}
			]
		
		});
		this.options.push({
			iconName: 'expand',
			displayName: 'Hedge Details',
			subItems: [
				{
					
					displayName: 'Profit Hedge',
					component: ProfitHedgePage
				},
				{
					
					displayName: 'Referal Hedge',
					component: ReferalHedgePage
				},
				{
				
					displayName: 'Matching Hedge',
					component: MatchingHedgePage
				},
				{
				
					displayName: 'Upline Hedge',
					component: UplineHedgePage
				},
				{
				
					displayName: 'Frontline Hedge',
					component: FrontlineHedgePage
				},
				{
				
					displayName: 'Widthdrawl History',
					component: WidthdrawlHistoryPage
				},
				{
				
					displayName: 'Hedge Summery',
					component: HedgeSummeryPage
				},
			]
		
		});
		this.options.push({
			iconName: 'help-circle',
			displayName: 'Support',
			component: SupportPage
		});

		this.options.push({
			iconName: 'body',
			displayName: 'Referral Program',
			component: ReferralProgramPage
		});

		this.options.push({
			iconName: 'log-out',
			displayName: 'Logout',
			custom: {
				isLogout: true
			}
		});

		
	}

	public selectOption(option: MenuOptionModel): void {
		this.menuCtrl.close().then(() => {
			if (option.custom && option.custom.isLogin) {
				this.presentAlert('You\'ve clicked the login option!');
			} else if (option.custom && option.custom.isLogout) {
				this.gotoLogin();
				// this.presentAlert('You\'ve clicked the logout option!');
			} else if (option.custom && option.custom.isExternalLink) {
				let url = option.custom.externalUrl;
				window.open(url, '_blank');
			} else {
				// Redirect to the selected page
				this.navCtrl.setRoot(option.component || DetailsPage, { 'title': option.displayName });
			}
		});
	}

	public collapseMenuOptions(): void {
		this.sideMenu.collapseAllOptions();
	}

	public presentAlert(message: string): void {
		let alert = this.alertCtrl.create({
			title: 'Information',
			message: message,
			buttons: ['Ok']
		});
		alert.present();
	}

	public gotoLogin():void{
		this.navCtrl.setRoot(LoginPage);
	}

}
