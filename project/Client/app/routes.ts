import { Routes } from '@angular/router'
import { ListComponent } from './components/list.component';
import { DetailsComponent } from './components/details.component';

export const appRoutes: Routes = [
  { path: 'user/list', component: ListComponent },
  { path: 'user/details', component: DetailsComponent },
  { path: '', redirectTo: 'user/list', pathMatch: 'full' }
]
