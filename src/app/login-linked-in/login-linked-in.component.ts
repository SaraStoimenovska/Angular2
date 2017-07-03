import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angular2-social-login';

declare var IN: any;

@Component({
  selector: 'app-login-linked-in',
  templateUrl: './login-linked-in.component.html',
  styleUrls: ['./login-linked-in.component.css']
})
export class LoginLinkedInComponent implements OnInit {
  public user;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

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
    document.getElementById('firstName').innerHTML = linkedinmember.firstName;
    document.getElementById('lastName').innerHTML = linkedinmember.lastName;
    document.getElementById('headline').innerHTML = linkedinmember.headline;
    console.log(linkedinmember.firstName + " " + linkedinmember.lastName);
  }
  displayProfilesErrors(error) {
    console.log(error.message);
  }

  // logoutLinkedIn() {
  //   this.auth.logout();
  //   console.log('Logged out from LinkedIn');
  // }

  logoutLinkedIn() {
    this.auth.logout().subscribe(
      (data) => {
        console.log(data);
        this.user = null;
        console.log('Logged out');
      }
    )
  }
}
