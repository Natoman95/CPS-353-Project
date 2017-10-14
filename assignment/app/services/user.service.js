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
var users = [
    { id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder" },
    { id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
    { id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
    { id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
];
var UserService = (function () {
    function UserService() {
    }
    // Adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
    };
    // Returns the user in local users array whose id matches the userId parameter
    UserService.prototype.findUserById = function (userId) {
    };
    // Returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
    };
    // updates the user in local users array whose id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
    };
    // removes the user whose id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map