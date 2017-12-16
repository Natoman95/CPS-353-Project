import { HomeComponent } from './components/home.component';
import { TopicQueryService } from './services/topic-query.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
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
import { SearchComponent } from './components/search.component';
import { AcademicQueryService } from './services/academic-query.service';

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule],
  declarations: [WebsitesAppComponent,
    SearchComponent,
    DetailsComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeComponent],
  providers: [AcademicQueryService,
    UserService,
    AuthService,
    TopicQueryService],
  bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}
