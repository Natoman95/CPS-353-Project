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
  user: IUser = { id: 0, userName: null, password: null, email: null, firstName: null, lastName: null };

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return this.authService.verifyPassword(password, duplicate);
  }

  register(userName, password) {
    this.user = this.userService.createUser(this.user.userName, this.user.password);
    // authenticate the user just created
    var loginSuccessful = this.authService.loginUser(this.user.userName, this.user.password);
    if (loginSuccessful) {
      this.router.navigate(["/user", this.user.id]);
    }
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

}
