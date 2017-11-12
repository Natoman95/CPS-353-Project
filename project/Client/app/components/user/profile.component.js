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
var router_2 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var auth_service_1 = require("./auth.service");
var ProfileComponent = (function () {
    function ProfileComponent(userService, authService, router, activatedRoute) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        // HTML binding data to display
        this.user = { Id: 0, UserName: null, Password: null, Email: null, FirstName: null, LastName: null };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the user id from the url and populate the page with that user
        // Set the current user
        this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
            .map(function (response) {
            _this.authService.currentUser = response.json();
            _this.user = response.json();
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ProfileComponent.prototype.update = function (userName, email, firstName, lastName) {
        var _this = this;
        // Unfortunately right now we have to find some of the current values and combine them with values that
        // have been passed to the function to avoid overwriting some of the values in the user array that
        // shouldn't be overwritten. I believe the back end should be comparing old and new values, but
        // that's a little more complex than this assignment requires.
        var id = this.authService.currentUser.id;
        var password = this.authService.currentUser.Password;
        var user = { Id: id, UserName: userName, Password: password, Email: email, FirstName: firstName, LastName: lastName };
        console.log(user, id);
        this.userService.updateUser(user.Id, user)
            .subscribe(function (response) {
            console.log("Success");
            // refresh the page
            _this.router.navigate(["/user", _this.user.Id]);
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ProfileComponent.prototype.websites = function () {
        this.router.navigate(["/websites"]);
    };
    ProfileComponent.prototype.logout = function () {
        this.authService.logoutUser;
        this.router.navigate(["/user/login"]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/profile.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService, auth_service_1.AuthService,
        router_1.Router, router_2.ActivatedRoute])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map