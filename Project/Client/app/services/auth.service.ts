import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'
import { Router } from '@angular/router'

// Logs in a user and keeps track of the currently authenticated user
@Injectable()
export class AuthService {

  static currentUser = null;
  url: string = null;

  constructor(private http: Http, private router: Router) {
    this.url = "http://localhost:5000/auth";
  }

  // Sends a request to the server to see if a username and password match
  // Just returns a subscription but all
  loginUser(userName: string, password: string) {
    console.log("auth.service username: " + userName + ", password: " + password);

    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);
    params.set('password', password);

    let request = this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'application/json' }) })

    request
      .map((response) => {
        AuthService.currentUser = response.json();
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });

    return request;
  }

  loginNewRegister() {

  }

  logoutUser() {

  }

  verifyPassword(password, duplicate): boolean {
    return password === duplicate;
  }

  isAuthenticated() {

  }
}