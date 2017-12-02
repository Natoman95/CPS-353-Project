import { Injectable } from '@angular/core'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  constructor(private router: Router) { }

  loginUser(userName: string, password: string) {

  }

  loginNewRegister() {

  }

  logoutUser() {

  }

  verifyPassword(password, duplicate): boolean {
    return password === duplicate;
  }

  isAuthenticated() {

  }
}