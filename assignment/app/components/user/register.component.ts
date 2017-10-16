import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return this.authService.verifyPassword(password, duplicate);
  }

  register(userName, password) {
    this.userService.createUser(userName, password);
    this.router.navigate(["/websites"]);
  }

  cancel() {
    this.router.navigate(["/login"]);
  }

}
