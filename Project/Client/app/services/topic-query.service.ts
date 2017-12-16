import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class TopicQueryService {

  private url: string;
  private static searchResults = null;
  private static details = null;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/topic";
  }

  // Takes a user query and send it to the server to find related topics
  public search(query: string) {
    console.log("query: " + query);

    let params: URLSearchParams = new URLSearchParams();
    params.set('query', query);

    this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'application/json' }) })
      .map((response) => {
        console.log("Getting search results from server");
        // get requests return an array of users
        TopicQueryService.searchResults = response.json();
        console.log(TopicQueryService.searchResults);
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  // The results of the search function are stored statically in this class
  public getSearchResults() {
    return TopicQueryService.searchResults;
  }

  // This class also stores the details of a particular search result item
  public getDetails() {
    return TopicQueryService.details;
  }

  // This sets the detailed information for a particular search result item
  public setDetails(topic) {
    TopicQueryService.details = topic;
  }
}