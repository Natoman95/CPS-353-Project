import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  userName = null;
  password = null;

  constructor(private router: Router, private authService: AuthService) { }

  login(userName, password) {
    this.authService.loginUser(userName, password)
      .map((response) => {
        console.log("Getting authentication result from server");
        let loginSuccessful = response.text();
        console.log("login result: " + loginSuccessful);
        if (loginSuccessful === "true") {
          this.router.navigate(['/user/profile']);
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
}