import { Component } from '@angular/core'
import { Router } from '@angular/router'
import 'rxjs/add/operator/map'

@Component({
  templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {

  constructor(private router: Router) { }

  verifyPassword(password, duplicate): boolean {
    return true;
  }

  register(userName, password, email) {
    this.router.navigate(['/user/profile']);
  }

  cancel() {
    this.router.navigate(["/user/login"]);
  }

}
