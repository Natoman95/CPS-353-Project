import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { LoginComponent } from './components/user/login.component'
import { ProfileComponent } from './components/user/profile.component'
import { RegisterComponent } from './components/user/register.component'
import { appRoutes } from './routes'
import { FormsModule } from '@angular/forms'
import { AuthService } from './components/user/auth.service'
import { UserService } from './services/user.service'

@NgModule({
  imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule],
  declarations: [WebsitesAppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent],
  providers: [AuthService,
    UserService],
  bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}
