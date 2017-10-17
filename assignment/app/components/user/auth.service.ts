import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { UserService } from '../../services/user.service'


@Injectable()
export class AuthService {

  constructor(private userService: UserService) { }

  currentUser: IUser
  loginUser(userName: string, password: string) {
    this.currentUser = this.userService.findUserByCredentials(userName, password);
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