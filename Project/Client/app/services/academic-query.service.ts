import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class AcademicQueryService {

  private url: string;
  private static searchResults = null;
  private static details = null;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/microsoft-academic/academicquery";
  }

  // Takes a user query and searches microsoft academic knowledge for relevant results via another server
  public search(query: string) {
    console.log("academic-query.service query: " + query);

    let params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map((response) => {
        console.log("Getting search results from server");
        // get requests return an array of users
        AcademicQueryService.searchResults = response.json();
        console.log(AcademicQueryService.searchResults);
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  // The results of the search function are stored statically in this class
  public getSearchResults() {
    return AcademicQueryService.searchResults;
  }

  // This class also stores the details of a particular search result item
  public getDetails() {
    return AcademicQueryService.details;
  }

  // This sets the detailed information for a particular search result item
  public setDetails(work) {
    AcademicQueryService.details = work;
  }
}    
