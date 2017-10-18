import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

  // HTML binding data to display
  user: IUser = { id: null, userName: null, password: null, email: null, firstName: null, lastName: null };
  errorMessage: any;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return this.authService.verifyPassword(password, duplicate);
  }

  register(userName, password, email) {
    var user: IUser = { id: null, userName: userName, password: password, email: email, firstName: null, lastName: null };
    this.user = this.userService.createUser(user);
    // authenticate the user just created if it was created successfully
    var loginSuccessful = false;
    if (this.user != null) {
      loginSuccessful = this.authService.loginUser(this.user.userName, this.user.password);
    }
    else {
      this.errorMessage = "Unable to create user."
    }
    if (loginSuccessful) {
      this.router.navigate(["/user", this.user.id]);
    }
    else {
      this.errorMessage = "Unable to create user."
    }
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

}
