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
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:5000/api/user";
    }
    // Adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.url, JSON.stringify({ user: user }), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    };
    // Returns the user in local users array whose id matches the userId parameter
    UserService.prototype.findUserById = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    // Returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (userName) {
        var params = new http_2.URLSearchParams();
        params.set('userName', userName);
        this.http.get(this.url, { search: params });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (userName, password) {
        var params = new http_2.URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);
        return this.http.get(this.url, { search: params });
    };
    // updates the user in local users array whose id matches the userId parameter
    UserService.prototype.updateUser = function (id, user) {
        return this.http.post(this.url + "/" + id, JSON.stringify(user), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    };
    // removes the user whose id matches the userId parameter
    UserService.prototype.deleteUser = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map