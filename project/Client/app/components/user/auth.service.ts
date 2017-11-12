import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private router: Router) { }

  currentUser;

  loginUser(userName: string, password: string) {
    return this.userService.findUserByCredentials(userName, password);
  }

  // If a user has just been registered, there's no need to send another http request to authenticate
  // Simply set the newly created user to the currentUser
  loginNewRegister(user: IUser) {
    this.currentUser = user;
  }

  logoutUser() {
    this.currentUser = null;
  }

  verifyPassword(password, duplicate): boolean {
    return password === duplicate;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}