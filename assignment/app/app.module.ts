import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { NavbarComponent } from './nav/navbar.component' 
import { appRoutes } from './routes'
import { LoginComponent } from './components/user/login.component'
import { FormsModule } from '@angular/forms'
import { AuthService } from './components/user/auth.service'
import { UserService } from './services/user.service'

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [WebsitesAppComponent,
        NavbarComponent,
        LoginComponent],
    providers: [AuthService,
        UserService],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}