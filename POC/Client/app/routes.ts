import { ProfileComponent } from './components/user/profile.component';
import { RegisterComponent } from './components/user/register.component';
import { LoginComponent } from './components/user/login.component';
import { Routes } from '@angular/router'
import { ListComponent } from './components/list.component';
import { DetailsComponent } from './components/details.component';

export const appRoutes: Routes = [
  { path: 'user/list', component: ListComponent },
  { path: 'user/details', component: DetailsComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: '', redirectTo: 'user/login', pathMatch: 'full' }
]
