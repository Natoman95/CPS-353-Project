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
var user_service_1 = require("./../../services/user.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../../services/auth.service");
var user_1 = require("../../models/user");
require("rxjs/add/operator/map");
var RegisterComponent = (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.user = new user_1.User();
        this.userType = "student";
    }
    RegisterComponent.prototype.verifyPassword = function (password, duplicate) {
        return true;
    };
    // Makes a server call to create a new user and navigates to
    // the newly created profile page
    RegisterComponent.prototype.register = function (firstName, lastName, title, userName, password, email, userType) {
        var _this = this;
        this.userService.createUser(firstName, lastName, title, userName, password, email, userType)
            .map(function (response) {
            _this.user = response.json();
            auth_service_1.AuthService.currentUser = response.json();
            _this.router.navigate(['/user', _this.user.id]);
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.router.navigate(["/user/login"]);
    };
    RegisterComponent.prototype.search = function () {
        this.router.navigate(["/user/search"]);
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/register.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map