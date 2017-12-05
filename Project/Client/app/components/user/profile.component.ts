import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

  user = { id: 0, userName: null, password: null, email: null, firstName: null, lastName: null };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // Get the user id from the url and populate the page with that user
    // Set the current user
    if (AuthService.currentUser == null) {
      this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
        .map((response) => {
          this.user = response.json();
          AuthService.currentUser = response.json();
        })
        .subscribe((response) => {
          console.log("Success");
        }, (error) => {
          console.log("Error: " + error);
        });
    }
    else {
      this.user = AuthService.currentUser;
    }
  }

  update(userName, email, firstName, lastName) {

  }

  logout() {
    this.router.navigate(["/user/login"]);
  }

  search() {
    this.router.navigate(["/user/search"]);
  }

}