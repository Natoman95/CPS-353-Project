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
  user: IUser = { Id: null, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };

  constructor(private userService: UserService, private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.authService.currentUser = this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
    // this.user = this.authService.currentUser; // Set HTML data
  }

  update(userName, email, firstName, lastName) {
    // Unfortunately right now we have to find some of the current values and combine them with values that
    // have been passed to the function to avoid overwriting some of the values in the user array that
    // shouldn't be overwritten. I believe the userService should be comparing old and new values, but
    // that's a little more complex than this assignment requires.
    var id = this.authService.currentUser.Id;
    var password = this.authService.currentUser.Password;
    var user: IUser = { Id: id, UserName: userName, Password: password, Email: email, FirstName: firstName, LastName: lastName };
    this.userService.updateUser(user.Id, user);
    this.router.navigate(["/user", this.user.Id]);
  }

  websites() {
    this.router.navigate(["/websites"]);
  }

  logout() {
    this.authService.logoutUser;
    this.router.navigate(["/user/login"]);
  }

}