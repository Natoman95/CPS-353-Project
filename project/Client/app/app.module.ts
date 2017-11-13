import { AcademicQueryService } from './services/academic-query.service';
import { DetailsComponent } from './components/details.component';
import { ListComponent } from './components/list.component';
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http'
import { WebsitesAppComponent } from './websites-app.component'
import { appRoutes } from './routes'
import { FormsModule } from '@angular/forms'

@NgModule({
  // Angular imports
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  // Components
  declarations: [
    WebsitesAppComponent,
    ListComponent,
    DetailsComponent
  ],
  // Services
  providers: [
    AcademicQueryService
  ],
  bootstrap: [WebsitesAppComponent]
})

export class AppModule {
}
