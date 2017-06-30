import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LoginSitesComponent } from './login-sites/login-sites.component';

import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'items',     component: ItemsComponent },
  { path: 'register',     component: RegisterComponent },
  { path: 'login',     component: LoginComponent },
  { path: 'login-sites',     component: LoginSitesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
