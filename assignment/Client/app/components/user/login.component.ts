import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  // HTML binding data to display
  user: IUser = { id: null, userName: null, password: null, email: null, firstName: null, lastName: null };
  errorMessage: any;

  constructor(private authService: AuthService, private router: Router) { }

  login(userName, password) {
    var loginSuccessful = this.authService.loginUser(userName, password);
    if (loginSuccessful) {
      this.user = this.authService.currentUser; // Set HTML data
      this.router.navigate(["/user", this.user.id]);
    }
    else {
      this.errorMessage = "User not found."
    }
  }

  register() {
    this.router.navigate(["/user/register"]);
  }
}