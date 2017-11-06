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
  user: IUser = { Id: null, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };
  errorMessage: any;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return this.authService.verifyPassword(password, duplicate);
  }

  register(userName, password, email) {
    var user: IUser = { Id: null, UserName: userName, Password: password, Email: email, FirstName: null, LastName: null };
    this.userService.createUser(user).subscribe((response) => {
      // authenticate the user just created if it was created successfully
      console.log("Success");
    }, (error) => {
      console.log("Error: " + JSON.stringify(error));
    });
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

}
