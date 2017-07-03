import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule, Headers } from '@angular/http';

import { FacebookService } from 'ng2-facebook-sdk';
import { TwitterService } from 'ng2-twitter';
// import { AuthService, AppGlobals } from 'angular2-google-login';
import {GoogleSignInComponent} from 'angular-google-signin';


import 'hammerjs';

import 'rxjs/add/operator/toPromise';

import { fakeBackendProvider } from './services/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { AuthGuard } from './services/auth.guard';
import { BaseRequestOptions } from '@angular/http';


import { Item } from './items/item';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent, DialogComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent, RegisterDialogComponent } from './register/register.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { LoginLinkedInComponent } from './login-linked-in/login-linked-in.component';

import { ItemsService } from './items/items.service';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { LoginSitesComponent } from './login-sites/login-sites.component';

import { Angular2SocialLoginModule } from 'angular2-social-login';

let providers = {
    'linkedin': {
      'clientId': '78s8xwpk6n2hru'
    },
    'google': {
      'clientId': '903075759019-3q89hsrh5q0p8kjvk4etv9l8d6qflqro.apps.googleusercontent.com'
    },
    'facebook' : {
      'clientId': '1918180375122700',
      'apiVersion': 'v2.9'
    }
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DialogComponent,
    HomeComponent,
    RegisterComponent,
    RegisterDialogComponent,
    ItemsComponent,
    LoginComponent,
    LoginSitesComponent,
    GoogleSignInComponent,
    LoginLinkedInComponent
  ],
  imports: [
    Angular2SocialLoginModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    ItemsService,
    AuthenticationService,
    UserService,
    AuthGuard,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    FacebookService,
    TwitterService,
    // AuthService,
  ],
  bootstrap: [ AppComponent ],
  entryComponents: [
    DialogComponent,
    RegisterDialogComponent
  ]
})
export class AppModule { }
Angular2SocialLoginModule.loadProvidersScripts(providers);

