import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  currentUser = null;
  url: string = null;

  constructor(private http: Http, private router: Router) {
    this.url = "http://localhost:5000/auth";
  }

  loginUser(userName: string, password: string) {
    console.log("auth.service username: " + userName + ", password: " + password);

    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);
    params.set('password', password);

    return this.http.get(this.url, { search: params, headers: new Headers({ 'Content-Type': 'text' }) })
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