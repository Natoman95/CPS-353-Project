import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'
import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

  // HTML binding data to display
  user: IUser = { Id: 0, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return this.authService.verifyPassword(password, duplicate);
  }

  register(userName, password, email) {
    let user: IUser = { Id: 0, UserName: userName, Password: password, Email: email, FirstName: null, LastName: null };
    let userWithId = null; // to be returned by the post - just the above user with a generated id

    this.userService.createUser(user)
      .map((response) => {
        console.log("Authenticating newly registered user");
        userWithId = response.json();
        // authenticate the user just created if it was created successfully
        this.authService.loginNewRegister(userWithId);
      })
      .subscribe((response) => {
        console.log("Success");
        this.router.navigate(['/user', userWithId.id]);
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

}
