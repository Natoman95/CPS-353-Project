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
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthService.prototype.loginUser = function (userName, password) {
        return this.userService.findUserByCredentials(userName, password);
    };
    // If a user has just been registered, there's no need to send another http request to authenticate
    // Simply set the newly created user to the currentUser
    AuthService.prototype.loginNewRegister = function (user) {
        this.currentUser = user;
    };
    AuthService.prototype.logoutUser = function () {
        this.currentUser = null;
    };
    AuthService.prototype.verifyPassword = function (password, duplicate) {
        return password === duplicate;
    };
    AuthService.prototype.isAuthenticated = function () {
        return !!this.currentUser;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map