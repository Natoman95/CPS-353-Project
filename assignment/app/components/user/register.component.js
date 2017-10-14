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
    }
    RegisterComponent.prototype.verifyPassword = function (password, duplicate) {
        return this.authService.verifyPassword(password, duplicate);
    };
    RegisterComponent.prototype.register = function (userName, password) {
        // I get the feeling that the user service should be doing this, but the assignment doesn't design it this way
        var id = Math.floor(Math.random() * 900) + 100;
        var user = { id: id, userName: userName, password: password, firstName: null, lastName: null };
        this.router.navigate(["/websites"]);
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(["/login"]);
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