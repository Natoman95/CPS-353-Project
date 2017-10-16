import { Routes } from '@angular/router'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component'
import { RegisterComponent } from './components/user/register.component'

export const appRoutes: Routes = [
  { path: 'user/login', component: LoginComponent },
  { path: 'user/:uid', component: ProfileComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: '', redirectTo: 'user/login', pathMatch: 'full' }
]
