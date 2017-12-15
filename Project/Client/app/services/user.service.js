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
// Makes requests that have to do with user CRUD operations
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.url = "http://localhost:5000/user";
    }
    // Add a new department to a user object
    UserService.prototype.addDepartmentToUser = function (id, institution, title) {
        console.log("Adding department: " + institution + " , " + title);
        return this.http.post(this.url, JSON.stringify({ id: id, institution: institution, title: title }), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    };
    // Create a new user
    UserService.prototype.createUser = function (user) {
        console.log("Creating user: " + user);
        return this.http.post(this.url, this.stringifyUser(user), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    };
    // Returns the user in local users array whose id matches the userId parameter
    UserService.prototype.findUserById = function (id) {
        console.log("Searching for user with id: " + id);
        var params = new http_2.URLSearchParams();
        params.set('id', id);
        return this.http.get(this.url, { search: params });
    };
    // Returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (userName) {
        console.log("Searching for user with username: " + userName);
        var params = new http_2.URLSearchParams();
        params.set('userName', userName);
        this.http.get(this.url, { search: params });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (userName, password) {
        console.log("Searching for user with username and password: " + userName, password);
        var params = new http_2.URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);
        return this.http.get(this.url, { search: params });
    };
    // updates the user
    UserService.prototype.updateUser = function (user) {
        console.log("Updating user: " + user);
        return this.http.put(this.url, this.stringifyUser(user), { headers: new http_1.Headers({ 'Content-Type': 'application/json' }) });
    };
    // removes the user whose id matches the userId parameter
    UserService.prototype.deleteUser = function (id) {
        console.log("Deleting user with id: " + id);
        return this.http.get(this.url + "/" + id);
    };
    // The user needs to be converted to JSON attribute by attribute, otherwise the JSON will
    // not be properly formatted
    UserService.prototype.stringifyUser = function (user) {
        return JSON.stringify({
            id: user.id, userName: user.userName, password: user.password,
            email: user.email, departments: user.departments,
            firstName: user.firstName, lastName: user.lastName
        });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map