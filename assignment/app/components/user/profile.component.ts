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
  user: IUser = { id: null, userName: null, password: null, email: null, firstName: null, lastName: null };

  constructor(private userService: UserService, private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authService.currentUser = this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
    this.user = this.authService.currentUser; // Set HTML data
  }

  update(userName, email, firstName, lastName) {
    // Unfortunately right now we have to find some of the current values and combine them with values that
    // have been passed to the function to avoid overwriting some of the values in the user array that
    // shouldn't be overwritten. I believe the userService should be comparing old and new values, but
    // that's a little more complex than this assignment requires.
    var id = this.authService.currentUser.id;
    var password = this.authService.currentUser.password;
    var user: IUser = { id: id, userName: userName, password: password, email: email, firstName: firstName, lastName: lastName };
    this.userService.updateUser(user.id, user);
    this.router.navigate(["/user", this.user.id]);
  }

  websites() {
    this.router.navigate(["/websites"]);
  }

  logout() {
    this.authService.logoutUser;
    this.router.navigate(["/user/login"]);
  }

}