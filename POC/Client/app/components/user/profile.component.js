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
var router_2 = require("@angular/router");
var ProfileComponent = (function () {
    function ProfileComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = { id: 0, userName: null, password: null, email: null, firstName: null, lastName: null };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get the user id from the url and populate the page with that user
        // Set the current user
        this.userService.findUserById(this.activatedRoute.snapshot.params['uid'])
            .map(function (response) {
            _this.user = response.json();
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    ProfileComponent.prototype.update = function (userName, email, firstName, lastName) {
    };
    ProfileComponent.prototype.logout = function () {
        this.router.navigate(["/user/login"]);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/user/profile.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, user_service_1.UserService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map