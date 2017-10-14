﻿import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service'
import { AuthService } from './auth.service'

@Component({
    templateUrl: 'app/components/user/profile.component.html'
})

export class ProfileComponent {
    
    constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

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