import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  update(userName, email, firstName, lastName) {

  }

  logout() {
    this.router.navigate(["/user/login"]);
  }

}