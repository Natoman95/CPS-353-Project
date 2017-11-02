import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserService {

  private url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/api/user";
  }

  // Adds the user parameter instance to the local users array
  createUser(user) {
    return this.http.post(this.url, JSON.stringify({ user }), { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // Returns the user in local users array whose id matches the userId parameter
  findUserById(id) {
    return this.http.get(this.url + "/" + id);
  }

  // Returns the user in local users array whose username matches the parameter username
  findUserByUsername(userName) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);

    this.http.get(this.url, { search: params });
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(userName, password) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);
    params.set('password', password);

    return this.http.get(this.url, { search: params });
  }

  // updates the user in local users array whose id matches the userId parameter
  updateUser(id, user) {
    return this.http.post(this.url + "/" + id, JSON.stringify(user), { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // removes the user whose id matches the userId parameter
  deleteUser(id) {
    return this.http.get(this.url + "/" + id);
  }
}    
