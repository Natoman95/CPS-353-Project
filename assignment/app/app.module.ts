﻿import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { WebsitesAppComponent } from './websites-app.component'
import { NavbarComponent } from './nav/navbar.component' 
import { appRoutes } from './routes'
import { LoginComponent } from './user/login.component'
import { FormsModule } from '@angular/forms'
import { AuthService} from './user/auth.service'
@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
    declarations: [WebsitesAppComponent,
        NavbarComponent,
        LoginComponent],
    providers: [AuthService],
    bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}
