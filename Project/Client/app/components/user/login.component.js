"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var auth_service_1 = require("./../../services/auth.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../../models/user");
var LoginComponent = (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.userName = null;
        this.password = null;
        this.user = new user_1.User();
    }
    // Send a login request to the user and add user to the authservice if one is returned
    LoginComponent.prototype.login = function (userName, password) {
        var _this = this;
        this.authService.loginUser(userName, password)
            .map(function (response) {
            console.log("Getting authentication result from server");
            var user = response.json();
            auth_service_1.AuthService.currentUser = response.json();
            console.log("login result: " + user);
            if (user != null) {
                _this.router.navigate(['/user', user.id]);
            }
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(["/user/register"]);
    };
    LoginComponent.prototype.search = function () {
        this.router.navigate(["/user/search"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map