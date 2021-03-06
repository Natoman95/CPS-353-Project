﻿import { HomeComponent } from './components/home.component';
import { ProfileComponent } from './components/user/profile.component';
import { RegisterComponent } from './components/user/register.component';
import { LoginComponent } from './components/user/login.component';
import { Routes } from '@angular/router'
import { SearchComponent } from './components/search.component';
import { DetailsComponent } from './components/details.component';

export const appRoutes: Routes = [
  { path: 'user/home', component: HomeComponent },
  { path: 'user/search', component: SearchComponent },
  { path: 'user/details/:type', component: DetailsComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/:uid', component: ProfileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]
