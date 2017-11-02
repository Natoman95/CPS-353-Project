import { Injectable } from '@angular/core'
import { IUser } from './user.model'
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private router: Router) { }

  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.userService.findUserByCredentials(userName, password)
      .subscribe((response) => {
        if (response.json()) {
          this.router.navigate(['/user', response.json().id]);
        }
      });
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