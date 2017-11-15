import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class AcademicQueryService {

  private url: string;
  private static searchResults = null;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/microsoft-academic/academicquery";
  }

  public search(query: string) {
    console.log("academic-query.service query: " + query);

    let params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map((response) => {
        console.log("Getting search results from server");
        // get requests return an array of users
        AcademicQueryService.searchResults = response.json();
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  public getSearchResults() {
    return AcademicQueryService.searchResults;
  }

}    
