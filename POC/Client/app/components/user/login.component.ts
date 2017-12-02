import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'app/components/user/login.component.html'
})

export class LoginComponent {

  constructor(private router: Router) { }

  login(userName, password) {
    this.router.navigate(['/user/profile']);
  }

  register() {
    this.router.navigate(["/user/register"]);
  }
}