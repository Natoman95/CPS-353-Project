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

  user;

  constructor(private userService: UserService, private authService: AuthService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.authService.currentUser = this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
    this.user = this.authService.currentUser;
  }

  update(userName, email, firstName, lastName) {
    var user = this.authService.currentUser;
    this.userService.updateUser(user.id, user);
  }

  websites() {
    this.router.navigate(["/websites"]);
  }

  logout() {
    this.authService.logoutUser;
    this.router.navigate(["/login"]);
  }

}