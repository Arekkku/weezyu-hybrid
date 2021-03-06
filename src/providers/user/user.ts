import 'rxjs/add/operator/toPromise';
import { HttpParams } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';


import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
* Most apps have the concept of a User. This is a simple provider
* with stubs for login/signup/etc.
*
* This User provider makes calls to our API at the `login` and `signup` endpoints.
*
* By default, it expects `login` and `signup` to return a JSON object of the shape:
*
* ```json
* {
*   status: 'success',
*   user: {
*     // User fields your app needs, like "id", "name", "email", etc.
*   }
* }Ø
* ```
*
* If the `status` field is not `success`, then an error is detected and returned.
*/
@Injectable()
export class User {
  _user: any;
  token: any;

  constructor(public api: Api) { }

  /**
  * Send a POST request to our login endpoint with the data
  * the user entered on the form.
  */
  login(accountInfo: any) {
    let seq = this.api.post('auth/basic', accountInfo).share();

    seq.subscribe((res: any) => {
      console.log(res.token);
      this._user = res.user;
      this.token = "Bearer " + res.token;
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', "" + err);
    });

    return seq;
  }

  getToken(){
    return this.token;
  }
  /**
  * Send a POST request to our signup endpoint with the data
  * the user entered on the form.
  */
  signup(accountInfo: any) {
    let seq = this.api.post('users', accountInfo).share();


    seq.subscribe((res: any) => {
      this._user = res.user;
      this.token = "Bearer " + res.token;
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', "" + err);
    });

    return seq;
  }

  /**
  * Log the user out, which forgets the session
  */
  logout() {
    this._user = null;
  }

  /**
  * Process a login/signup response to store user data
  */
  _loggedIn(resp) {
    this._user = resp.user;
  }

  getFriends(params: any){
    let reqOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.get('users/me/friends', params, reqOpts);
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in

    }, err => {
      console.error('ERROR', "" + err);
    });

    return seq;
  }

  getConversation(params: any){
    let reqOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.get('conversations/users/me', params, reqOpts);
    seq.subscribe((res: any) => {
      console.log(res);

      // If the API returned a successful response, mark the user as logged in

    }, err => {
      console.error('ERROR', "" + err);
    });

    return seq;
  }

  search(params: any){
    let reqOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.get('users/search', params, reqOpts);
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  addFriend(params: string){
    let reqOpts = {
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.post('users/me/friends/', {"friend_id": params}, reqOpts).share();
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  createConversation(params: string){
//    let array : Array<string> = [params];
    let reqOpts = {
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.post('conversations', {"users": params}, reqOpts).share();
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  acceptFriendRequest(params: string){
    let reqOpts = {
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.post('users/me/friends', {"friend_id": params}, reqOpts).share();
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  declineFriendRequest(params: string){
    let reqOpts = {
      headers: new HttpHeaders().set("Authorization", this.token),
      body: {"friend_id": params}
    };
    let seq = this.api.delete('users/me/friends/', reqOpts).share();
    seq.subscribe((res: any) => {
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getConversationid(params: string){
    let reqOpts = {
      params: new HttpParams(),
      headers: new HttpHeaders().set("Authorization", this.token)
    };
    let seq = this.api.get('conversations/me/' + params, params, reqOpts);
    seq.subscribe((res: any) => {
      console.log(res);

      // If the API returned a successful response, mark the user as logged in

    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  deleteFriend(params:string){
      let reqOpts = {
        headers: new HttpHeaders().set("Authorization", this.token),
        body: {"friend_id": params}
      };
      let seq = this.api.delete('users/me/friends/', reqOpts).share();
      seq.subscribe((res: any) => {
        console.log(res);
        // If the API returned a successful response, mark the user as logged in
      }, err => {
        console.error('ERROR', err);
      });

      return seq;
    }
}
