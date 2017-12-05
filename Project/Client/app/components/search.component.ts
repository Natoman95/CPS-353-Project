import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/components/search.component.html'
})

export class SearchComponent {

  public query: string = null;

  constructor(private router: Router, private academicSvc: AcademicQueryService) { }

  // Get academic data about the query
  public search(query: string) {
    console.log("list.component query: " + query);
    let searchResults = null;

    if (query != null) {
      this.academicSvc.search(query);
    }
  }

  // Retrieve the results of that search
  public getSearchResults() {
    return this.academicSvc.getSearchResults();
  }

  // Navigate to the details page upon clicking one item of the search results
  public getDetails(work) {
    // Save the details that will be displayed on the details page
    this.academicSvc.setDetails(work);
    this.router.navigate(["/user/details"]);
  }
}