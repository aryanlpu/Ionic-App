
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class PocketProvider {
  private _url='/api';
  data:any;
  constructor(public http:Http) {
    console.log('Hello pocketService Provider');
  } 
    getPocketSummary()
   {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this._url+'?action=EWALLET_SUMMARY&u_username=730000004034&u_password=26062606')
        .map(res => res.json())
        .subscribe(data => {
          this.data=data;
          resolve(this.data);
        });
      });
   }

   getGreenPocketSummary()
   {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this._url+'?action=WALLET_STATEMENT&u_username=730000004034&u_password=26062606&pay_group=GW')
        .map(res => res.json())
        .subscribe(data => {
          this.data=data;
          resolve(this.data);
        });
      });
   }

   getBluePocketSummary()
   {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this._url+'?action=WALLET_STATEMENT&u_username=730000004034&u_password=26062606&pay_group=BW')
        .map(res => res.json())
        .subscribe(data => {
          this.data=data;
          resolve(this.data);
        });
      });
   }
   getGoldPocketSummary()
   {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this._url+'?action=WALLET_STATEMENT&u_username=730000004034&u_password=26062606&pay_group=GPW')
        .map(res => res.json())
        .subscribe(data => {
          this.data=data;
          resolve(this.data);
        });
      });
   }
   
}
