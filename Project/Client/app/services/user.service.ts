import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { URLSearchParams } from '@angular/http'

// Makes requests that have to do with user CRUD operations
@Injectable()
export class UserService {

  private url: string;

  constructor(private http: Http) {
    this.url = "http://localhost:5000/user";
  }

  // Add a new department to a user object
  public addDepartmentToUser(id, institution, title) {
    console.log("Adding department: " + institution + " , " + title);

    return this.http.post(this.url, JSON.stringify({ id: id, institution: institution, title: title }),
      { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // Create a new user
  public createUser(firstName, lastName, title, userName, password, email, userType) {
    console.log("Creating user: " + userName, password, email, userType);

    return this.http.post(this.url, JSON.stringify({
      firstName: firstName, lastName: lastName,
      title: title, userName: userName, password: password, email: email, userType: userType
    }),
      { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // Returns the user in local users array whose id matches the userId parameter
  public findUserById(id) {
    console.log("Searching for user with id: " + id);
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id);

    return this.http.get(this.url, { search: params });
  }

  // Returns the user in local users array whose username matches the parameter username
  public findUserByUsername(userName) {
    console.log("Searching for user with username: " + userName);
    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);

    this.http.get(this.url, { search: params });
  }

  // returns the user whose username and password match the username and password parameters
  public findUserByCredentials(userName, password) {
    console.log("Searching for user with username and password: " + userName, password);

    let params: URLSearchParams = new URLSearchParams();
    params.set('userName', userName);
    params.set('password', password);

    return this.http.get(this.url, { search: params });
  }

  // updates the user
  public updateUser(user) {
    console.log("Updating user: " + user);

    return this.http.put(this.url, this.stringifyUser(user),
      { headers: new Headers({ 'Content-Type': 'application/json' }) });
  }

  // removes the user whose id matches the userId parameter
  public deleteUser(id) {
    console.log("Deleting user with id: " + id);

    return this.http.get(this.url + "/" + id);
  }

  // The user needs to be converted to JSON attribute by attribute, otherwise the JSON will
  // not be properly formatted
  private stringifyUser(user) {
    return JSON.stringify({
      id: user.id, userName: user.userName, password: user.password,
      email: user.email, departments: user.departments,
      firstName: user.firstName, lastName: user.lastName
    });
  }
}    
