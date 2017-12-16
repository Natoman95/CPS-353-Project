import { UserService } from './../../services/user.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

  user: User = new User();
  userType = "student";

  constructor(private router: Router, private userService: UserService) { }

  verifyPassword(password, duplicate): boolean {
    return true;
  }

  // Makes a server call to create a new user and navigates to
  // the newly created profile page
  register(firstName, lastName, title, userName, password, email, userType) {
    this.userService.createUser(firstName, lastName, title, userName, password, email, userType)
      .map((response) => {
        this.user = response.json();
        AuthService.currentUser = response.json();
        this.router.navigate(['/user', this.user.id]);
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

  search() {
    this.router.navigate(["/user/search"]);
  }
}
