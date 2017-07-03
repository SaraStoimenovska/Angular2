import { Component, } from '@angular/core';
import { Http } from 'ng2-twitter/node_modules/@angular/http';

import { AuthResponse, InitParams, FacebookService, LoginResponse, LoginOptions } from 'ng2-facebook-sdk';
import {GoogleSignInSuccess} from 'angular-google-signin';

import { AuthService } from 'angular2-social-login';

declare var IN: any;


@Component({
  selector: 'app-login-sites',
  templateUrl: './login-sites.component.html',
  styleUrls: ['./login-sites.component.css'],
})
export class LoginSitesComponent {
  public user;
  sub: any;

  private myClientId: string = '903075759019-3q89hsrh5q0p8kjvk4etv9l8d6qflqro.apps.googleusercontent.com';

  constructor(private fb: FacebookService,
              public auth: AuthService) {

    let fbParams: InitParams = {
                                   appId: '1918180375122700',
                                   xfbml: true,
                                   cookie: true,
                                   version: 'v2.9'
                                   };
    this.fb.init(fbParams);
   }

   

   onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' + profile .getId());
    console.log('Name: ' + profile.getName());
  }

  logoutGoogle()  {
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out from Google.');
    });
  }

  loginFb() {
    this.fb.login()
        .then((res: LoginResponse) => {
          console.log('Logged in', res);
          console.log(this.fb.getAuthResponse());
          if (res.status === 'connected') {
            console.log(res.authResponse.accessToken);
          }
        })
        .catch(this.handleError);
  }

  me() {
    this.fb.api('/me')
      .then((res: any) => {
        console.log('Got the users profile from Facebook', res);
      })
      .catch(this.handleError);
  }

  logoutFb() {
    this.fb.logout();
    console.log('Logged out from Facebook');
  }

  // 78s8xwpk6n2hru linkedin client id
  // haUjaZWMwx1O0eX9 linkedin client server

  onLinkedInLoad() {
      console.log('HI');
      IN.UI.Authorize().params({"scope":["r_basicprofile"]}).place();
      IN.Event.on(IN, 'auth', this.onLinkedInAuth);
      // IN.User.authorize(this.onLinkedInAuth);
  }
  onLinkedInAuth() {
    IN.API.Profile("me")
      // .fields(["firstName", "lastName"])
      .result(
        this.displayProfiles,
        function(result) {
      // console.log(result.values[0] + "+++");
        })
      .error(this.displayProfilesErrors);
  }
  displayProfiles(profiles) {
    var linkedinmember = profiles.values[0];
    console.log(JSON.stringify(linkedinmember));
    console.log(linkedinmember.firstName + " " + linkedinmember.lastName);
  }
  displayProfilesErrors(error) {
    console.log(error.message);
  }

  logoutLinkedIn() {
    this.auth.logout();
    console.log('Logged out from LinkedIn');
  }

  login(provider) {
    this.sub = this.auth.login(provider).subscribe(
      (data) => {
        console.log('Logged in');
        console.log(data);
        this.user = data;
      }
    )
  }
  logout() {
    this.auth.logout().subscribe(
      (data) => {
        console.log(data);
        this.user = null;
        console.log('Logged out');
      }
    )
  }


  private handleError(error) {
    console.error('Error processing action', error);
  }
}
