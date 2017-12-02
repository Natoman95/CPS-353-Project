import { ProfileComponent } from './components/user/profile.component';
import { RegisterComponent } from './components/user/register.component';
import { LoginComponent } from './components/user/login.component';
import { DetailsComponent } from './components/details.component';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { WebsitesAppComponent } from './websites-app.component'
import { appRoutes } from './routes'
import { FormsModule } from '@angular/forms'
import { ListComponent } from './components/list.component';
import { AcademicQueryService } from './services/academic-query.service';

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule],
  declarations: [WebsitesAppComponent,
    ListComponent,
    DetailsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent],
  providers: [AcademicQueryService],
  bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}
