import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model'

var USERS: Array<IUser> = [];

@Injectable()
export class UserService {

  ngOnInit() {
    USERS = [
      { id: 123, userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice.wonder@gordon.edu" },
      { id: 234, userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob.marley@gordon.edu" },
      { id: 345, userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly.garcia@gordon.edu" },
      { id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose.annunzi@gordon.edu" }
    ];
  }

  // Adds the user parameter instance to the local users array
  createUser(user): IUser {
    this.retrieveData();
    if (user.userName != null && user.password != null) {
      // generate a random id between 0 and 999 - should probably be next sequentially in some index of existing id's
      var id = Math.floor(Math.random() * 900) + 100;
      user.id = id;
      USERS.push(user);
    }
    this.storeData();
    return user;
  }

  // Returns the user in local users array whose id matches the userId parameter
  findUserById(id): IUser {
    this.retrieveData();
    return USERS.find(user => user.id === 1 * id);
  }

  // Returns the user in local users array whose username matches the parameter username
  findUserByUsername(userName): IUser {
    this.retrieveData();
    return USERS.find(user => user.userName === userName);
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(userName, password): IUser {
    this.retrieveData();
    return USERS.find(user => user.userName === userName, user => user.password === password);
  }

  // updates the user in local users array whose id matches the userId parameter
  updateUser(id, user) {
    this.retrieveData();
    var index = USERS.findIndex(user => user.id === id);
    USERS[index] = user;
    this.storeData();
  }

  // removes the user whose id matches the userId parameter
  deleteUser(id) {
    this.retrieveData();
    var index = USERS.findIndex(user => user.id === id);
    USERS.splice(index, 1);
    this.storeData();
  }

  storeData() {
    var storedUsers = JSON.stringify(USERS);
    localStorage.setItem("storedUsers", storedUsers);
  }

  retrieveData() {
    var retrievedUsers = localStorage.getItem("storedUsers");
    USERS = JSON.parse(retrievedUsers);
  }
}    
