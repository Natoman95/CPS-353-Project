import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  // HTML binding data to display
  user: IUser = { Id: 0, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };

  constructor(private authService: AuthService, private router: Router) { }

  login(userName, password) {
    console.log(userName, password);
    let userArray = null;

    this.authService.loginUser(userName, password)
      .map((response) => {
        console.log("Authenticating user");
        // get requests return an array of users
        userArray = response.json();
        this.user = userArray[0];
      })
      .subscribe((response) => {
        console.log("Success");
        this.router.navigate(['/user', userArray[0].id]);
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  register() {
    this.router.navigate(["/user/register"]);
  }
}