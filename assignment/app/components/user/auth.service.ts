import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { UserService } from '../../services/user.service'


@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  currentUser: IUser;

  loginUser(userName: string, password: string): boolean {
    var loggedInUser = this.userService.findUserByCredentials(userName, password);
    var isSuccessful = false;
    if (loggedInUser != null) {
      this.currentUser = loggedInUser;
      isSuccessful = true;
    }
    else {
      isSuccessful = false;
    }
    return isSuccessful;
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