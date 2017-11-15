import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/components/list.component.html'
})

export class ListComponent {

  public query: string = null;

  constructor(private router: Router, private academicSvc: AcademicQueryService) { }

  public search(query: string) {
    console.log("list.component query: " + query);
    let searchResults = null;

    if (query != null) {
      this.academicSvc.search(query);
      this.router.navigate(["/user/details"]);
    }
  }
}