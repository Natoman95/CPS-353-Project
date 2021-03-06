import { IUser } from './../components/user/user.model';
import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'

@Injectable()
export class UserService {

  private url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/api/user";
  }

  // Adds the user parameter instance to the local users array
  public createUser(user: IUser) {
    console.log(user);
    return this.http.post(this.url, this.stringifyUser(user), { headers: new Headers({ 'Content-Type': 'application/json' }) });
    //return this.http.post(this.url, JSON.stringify({ user }), { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // Returns the user in local users array whose id matches the userId parameter
  public findUserById(id) {
    console.log(id);
    return this.http.get(this.url + "/" + id);
  }

  // Returns the user in local users array whose username matches the parameter username
  public findUserByUsername(userName) {
    console.log(userName);
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);

    this.http.get(this.url, { search: params });
  }

  // returns the user whose username and password match the username and password parameters
  public findUserByCredentials(userName, password) {
    console.log(userName, password);
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);
    params.set('password', password);

    return this.http.get(this.url, { search: params });
  }

  // updates the user in local users array whose id matches the userId parameter
  public updateUser(id, user) {
    console.log(id, user);
    return this.http.put(this.url + "/" + id, this.stringifyUser(user), { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // removes the user whose id matches the userId parameter
  public deleteUser(id) {
    console.log(id);
    return this.http.get(this.url + "/" + id);
  }

  // The user needs to be converted to JSON attribute by attribute, otherwise the JSON will not be properly formatted
  private stringifyUser(user: IUser) {
    return JSON.stringify({ Id: user.Id, Username: user.UserName, Password: user.Password, FirstName: user.FirstName, LastName: user.LastName, Email: user.Email });
  }
}    
