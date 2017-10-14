import { Routes } from '@angular/router'
import { LoginComponent } from './components/user/login.component'

export const appRoutes:Routes = [
    { path: 'user/login', component: LoginComponent },
    { path: '', redirectTo: '/websites', pathMatch: 'full' }
]
