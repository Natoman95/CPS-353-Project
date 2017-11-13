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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        // HTML binding data to display
        this.user = { Id: 0, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };
    }
    LoginComponent.prototype.login = function (userName, password) {
        var _this = this;
        console.log(userName, password);
        var userArray = null;
        this.authService.loginUser(userName, password)
            .map(function (response) {
            console.log("Authenticating user");
            // get requests return an array of users
            userArray = response.json();
            _this.user = userArray[0];
        })
            .subscribe(function (response) {
            console.log("Success");
            _this.router.navigate(['/user', userArray[0].id]);
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(["/user/register"]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/login.component.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map