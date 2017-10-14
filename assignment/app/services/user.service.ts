import { Injectable } from '@angular/core'
@Injectable()

export class UserService
{
    // Adds the user parameter instance to the local users array
    createUser(user) {

    }

    // Returns the user in local users array whose id matches the userId parameter
    findUserById(userId) {

    }

    // Returns the user in local users array whose username matches the parameter username
    findUserByUsername(username) {

    }
    
    // returns the user whose username and password match the username and password parameters
    findUserByCredentials(username, password) {

    }
    
    // updates the user in local users array whose id matches the userId parameter
    updateUser(userId, user) {

    }
    
    // removes the user whose id matches the userId parameter
    deleteUser(userId) {

    }
}

const USERS = [
    {id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
];    
