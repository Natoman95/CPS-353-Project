import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'
import { IUser } from './user.model'

@Component({
    templateUrl: 'app/components/user/register.component.html'
})

export class RegisterComponent {
    
    constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

    verifyPassword(password, duplicate) :boolean {
        return this.authService.verifyPassword(password, duplicate);
    }

    register(userName, password) {
        // I get the feeling that the user service should be doing this, but the assignment doesn't design it this way
        var id = Math.floor(Math.random() * 900) + 100;
        var user: IUser = { id: id, userName: userName, password: password, firstName: null, lastName: null };
        this.router.navigate(["/websites"]);
    }

    cancel() {
        this.router.navigate(["/login"]);
    }

}