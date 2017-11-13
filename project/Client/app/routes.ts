import { DetailsComponent } from './components/details.component';
import { Routes } from '@angular/router'
import { ListComponent } from './components/list.component';

export const appRoutes: Routes = [
  { path: 'user/list', component: ListComponent },
  { path: 'user/details', component: DetailsComponent },
  { path: '', redirectTo: 'user/list', pathMatch: 'full' }
]
