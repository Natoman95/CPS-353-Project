import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/details.component.html'
})

export class DetailsComponent {

  private work = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private academicSvc: AcademicQueryService) { }

  ngOnInit() {
    // Retrieve stored details from the list of search results
    this.work = this.academicSvc.getDetails();
    console.log(this.work);
  }
}