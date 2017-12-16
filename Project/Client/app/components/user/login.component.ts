import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { User } from '../../models/user';

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  userName = null;
  password = null;
  user: User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  // Send a login request to the user and add user to the authservice if one is returned
  login(userName, password) {
    this.authService.loginUser(userName, password)
      .map((response) => {
        console.log("Getting authentication result from server");
        let user = response.json();
        AuthService.currentUser = response.json();
        console.log("login result: " + user);
        if (user != null) {
          this.router.navigate(['/user', user.id]);
        }
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  register() {
    this.router.navigate(["/user/register"]);
  }

  search() {
    this.router.navigate(["/user/search"]);
  }

  public home() {
    this.router.navigate(["/user/home"]);
  }
}