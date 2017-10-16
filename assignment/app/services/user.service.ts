import { Injectable } from '@angular/core'
import { IUser } from '../components/user/user.model'

const USERS: Array<IUser> = [
  { id: 123, userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
  { id: 234, userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
  { id: 345, userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
  { id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];

@Injectable()
export class UserService {

  // Adds the user parameter instance to the local users array
  createUser(userName, password) {
    // generate a random id between 0 and 999 - should probably be next sequentially in some index of existing id's
    var id = Math.floor(Math.random() * 900) + 100;
    var user: IUser = { id: id, userName: userName, password: password, firstName: null, lastName: null };
    USERS.push(user);
  }

  // Returns the user in local users array whose id matches the userId parameter
  findUserById(id): IUser {
    return USERS.find(user => user.id === id);
  }

  // Returns the user in local users array whose username matches the parameter username
  findUserByUsername(userName): IUser {
    return USERS.find(user => user.userName === userName);
  }

  // returns the user whose username and password match the username and password parameters
  findUserByCredentials(userName, password): IUser {
    return USERS.find(user => user.userName === userName, user => user.password === password);
  }

  // updates the user in local users array whose id matches the userId parameter
  updateUser(id, user) {
    var index = USERS.findIndex(user => user.id === id);
    USERS[index] = user;
  }

  // removes the user whose id matches the userId parameter
  deleteUser(id) {
    var index = USERS.findIndex(user => user.id === id);
    USERS.splice(index, 1);
  }
}    
