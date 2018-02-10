// Angular references
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Ionic references
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// App
import { MyApp } from './app.component';

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
// Custom components
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import { UserProvider } from '../providers/user/user';
import { PocketProvider } from '../providers/pocket/pocket';
import { TicketProvider } from '../providers/ticket/ticket';
import { ReferralProvider } from '../providers/referral/referral';
import { InternalBodyProvider } from '../providers/internal-body/internal-body';
import { HedgeProvider } from '../providers/hedge/hedge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DetailsPage,
    UpdateAccountPage,
UpdateAccountListPage,
AccountLogReportPage,
SetAccountPasswordPage,
UpdatePersonalInfoPage,
FrontlineHedgePage,
HedgeSummeryPage,
MatchingHedgePage,
ProfitHedgePage,
ReferalHedgePage,
UplineHedgePage,
WidthdrawlHistoryPage,
DirectReferalPage,
MatchingAccountPage,
TeamReferalPage,
ReferralProgramPage,
SupportPage,
AvailableTicketPage,
TicketReceivedPage,
TicketTransferedPage,
UsedTicketDetailPage,
BluePocketStatementPage,
GreenPocketStatementPage,
GoldPocketStatementPage,
GoldRequestPage,
PocketSummeryPage,
RhfCoinSellHistoryPage,
RhfCoinStatementPage,

    // Side menu custom component
    SideMenuContentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DetailsPage,
    UpdateAccountPage,
UpdateAccountListPage,
AccountLogReportPage,
SetAccountPasswordPage,
UpdatePersonalInfoPage,
FrontlineHedgePage,
HedgeSummeryPage,
MatchingHedgePage,
ProfitHedgePage,
ReferalHedgePage,
UplineHedgePage,
WidthdrawlHistoryPage,
DirectReferalPage,
MatchingAccountPage,
TeamReferalPage,
ReferralProgramPage,
SupportPage,
AvailableTicketPage,
TicketReceivedPage,
TicketTransferedPage,
UsedTicketDetailPage,
BluePocketStatementPage,
GreenPocketStatementPage,
GoldPocketStatementPage,
GoldRequestPage,
PocketSummeryPage,
RhfCoinSellHistoryPage,
RhfCoinStatementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserProvider,
    PocketProvider,
    TicketProvider,
    ReferralProvider,
    InternalBodyProvider,
    HedgeProvider
  ]
})
export class AppModule { 

 
}
