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
var user_service_1 = require("../../services/user.service");
var auth_service_1 = require("./auth.service");
var RegisterComponent = (function () {
    function RegisterComponent(userService, authService, router) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        // HTML binding data to display
        this.user = { id: null, userName: null, password: null, email: null, firstName: null, lastName: null };
    }
    RegisterComponent.prototype.verifyPassword = function (password, duplicate) {
        return this.authService.verifyPassword(password, duplicate);
    };
    RegisterComponent.prototype.register = function (userName, password, email) {
        var user = { id: null, userName: userName, password: password, email: email, firstName: null, lastName: null };
        this.user = this.userService.createUser(user);
        // authenticate the user just created if it was created successfully
        var loginSuccessful = false;
        if (this.user != null) {
            loginSuccessful = this.authService.loginUser(this.user.userName, this.user.password);
        }
        else {
            this.errorMessage = "Unable to create user.";
        }
        if (loginSuccessful) {
            this.router.navigate(["/user", this.user.id]);
        }
        else {
            this.errorMessage = "Unable to create user.";
        }
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(["/user/login"]);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/register.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map