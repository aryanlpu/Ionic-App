
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class UserProvider {
  private _url='/api';
  user_data:any;
  data:any;
  constructor(public http:Http) {
    console.log('user Service Provider');
  } 
   login()
    {
      if (this.data) {
        return Promise.resolve(this.data);
      }
      return new Promise(resolve => {
        this.http.get(this._url+'?action=LOGIN&u_username=730000004034&u_password=26062606')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
        });
    }
    registration()
    {

    }
    getProfile()
   {
    if (this.user_data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(this._url+'?action=VIEW_PROFILE&u_username=730000004034&u_password=26062606')
        .map(res => res.json())
        .subscribe(data => {
          this.user_data=data;
          resolve(this.user_data);
        });
      });
   }
   updateProfile()
   {

   }
   changePassword()
   {

   }
}
