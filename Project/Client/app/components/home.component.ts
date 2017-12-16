import { TopicQueryService } from './../services/topic-query.service';
import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/home.component.html'
})

export class HomeComponent {

  constructor(private router: Router) { }

  login() {
    this.router.navigate(["/user/login"]);
  }

  search() {
    this.router.navigate(["/user/search"]);
  }

  public home() {
    this.router.navigate(["/user/home"]);
  }
}