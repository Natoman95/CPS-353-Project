import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { IUser } from './user.model'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  // HTML binding data to display
  user: IUser = { id: 0, userName: null, password: null, email: null, firstName: null, lastName: null };

  constructor(private authService: AuthService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  login(userName, password) {
    var loginSuccessful = this.authService.loginUser(userName, password);
    if (loginSuccessful) {
      this.user = this.authService.currentUser; // Set HTML data
      this.router.navigate(["/user", this.user.id]);
    }
  }

  register() {
    this.router.navigate(["/user/register"]);
  }
}