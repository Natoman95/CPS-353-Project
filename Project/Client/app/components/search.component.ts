import { TopicQueryService } from './../services/topic-query.service';
import { AuthService } from './../services/auth.service';
import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/components/search.component.html'
})

export class SearchComponent {

  public academicQuery: string = null;
  public wikiQuery: string = null;

  constructor(private router: Router, private academicSvc: AcademicQueryService, private authService: AuthService,
    private topicSvc: TopicQueryService) { }

  // Get academic data about the query
  public academicSearch(query: string) {
    console.log("query: " + query);
    let searchResults = null;

    if (query != null) {
      this.academicSvc.search(query);
    }
  }

  // Retrieve the results of that search
  public getAcademicSearchResults() {
    return this.academicSvc.getSearchResults();
  }

  // Navigate to the details page upon clicking one item of the search results
  public getAcademicDetails(work) {
    // Save the details that will be displayed on the details page
    this.academicSvc.setDetails(work);
    this.router.navigate(["/user/details"]);
  }

  // Get wiki pages related to the query
  public wikiSearch(query: string) {
    console.log("query: " + query);
    let searchResults = null;

    if (query != null) {
      this.topicSvc.search(query);
    }
  }

  // Retrieve the results of that search
  public getWikiSearchResults() {
    return this.topicSvc.getSearchResults();
  }

  // Navigate to the details page upon clicking one item of the search results
  public getWikiDetails(topic) {
    // Save the details that will be displayed on the details page
    this.topicSvc.setDetails(topic);
    this.router.navigate(["/user/details"]);
  }

  public profile() {
    if (AuthService.currentUser !== null && AuthService.currentUser !== undefined) {
      this.router.navigate(["/user/", AuthService.currentUser.id]);
    }
    else {
      this.router.navigate(["/user/login"]);
    }
  }
}