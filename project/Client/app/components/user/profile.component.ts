import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
  templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

  // HTML binding data to display
  user: IUser = { Id: 0, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };

  constructor(private userService: UserService, private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Get the user id from the url and populate the page with that user
    // Set the current user
    this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
      .map((response) => {
        this.authService.currentUser = response.json();
        this.user = response.json();
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  update(userName, email, firstName, lastName) {
    // Unfortunately right now we have to find some of the current values and combine them with values that
    // have been passed to the function to avoid overwriting some of the values in the user array that
    // shouldn't be overwritten. I believe the back end should be comparing old and new values, but
    // that's a little more complex than this assignment requires.
    let id = this.authService.currentUser.id;
    let password = this.authService.currentUser.Password;
    let user: IUser = { Id: id, UserName: userName, Password: password, Email: email, FirstName: firstName, LastName: lastName };
    console.log(user, id);

    this.userService.updateUser(user.Id, user)
      .subscribe((response) => {
        console.log("Success");
        // refresh the page
        this.router.navigate(["/user", this.user.Id]);
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  websites() {
    this.router.navigate(["/websites"]);
  }

  logout() {
    this.authService.logoutUser;
    this.router.navigate(["/user/login"]);
  }

}