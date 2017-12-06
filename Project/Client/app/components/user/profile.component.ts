import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

  user: User = new User();
  institution = null;
  title = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    // Get the user id from the url and populate the page with that user
    // Set the current user
    if (AuthService.currentUser == null) {
      this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
        .map((response) => {
          this.user = response.json();
          console.log(this.user);
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

  update(user) {

  }

  addDepartment(id, institution, title) {
    console.log("Adding department: " + institution + " , " + title);
    this.userService.addDepartmentToUser(id, institution, title)
      .switchMap((value) => {
        this.refreshUserData();
        return "test";
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }

  logout() {
    this.router.navigate(["/user/login"]);
  }

  search() {
    this.router.navigate(["/user/search"]);
  }

  refreshUserData() {
    // Get the user id from the url and populate the page with that user
    // Set the current user
    return this.userService.findUserById(this.user.id)
      .map((response) => {
        this.user = response.json();
        console.log(this.user);
        AuthService.currentUser = response.json();
      })
      .subscribe((response) => {
        console.log("Success");
      }, (error) => {
        console.log("Error: " + error);
      });
  }
}