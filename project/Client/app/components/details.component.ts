import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/details.component.html'
})

export class DetailsComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private academicSvc: AcademicQueryService) { }

  public getSearchResults() {
    return JSON.stringify(this.academicSvc.getSearchResults());
  }
}