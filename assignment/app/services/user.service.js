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
var USERS = [];
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.ngOnInit = function () {
        USERS = [
            { id: 123, userName: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice.wonder@gordon.edu" },
            { id: 234, userName: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob.marley@gordon.edu" },
            { id: 345, userName: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly.garcia@gordon.edu" },
            { id: 456, userName: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi", email: "jose.annunzi@gordon.edu" }
        ];
    };
    // Adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        this.retrieveData();
        if (user.userName != null && user.password != null) {
            // generate a random id between 0 and 999 - should probably be next sequentially in some index of existing id's
            var id = Math.floor(Math.random() * 900) + 100;
            user.id = id;
            USERS.push(user);
        }
        this.storeData();
        return user;
    };
    // Returns the user in local users array whose id matches the userId parameter
    UserService.prototype.findUserById = function (id) {
        this.retrieveData();
        return USERS.find(function (user) { return user.id === 1 * id; });
    };
    // Returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (userName) {
        this.retrieveData();
        return USERS.find(function (user) { return user.userName === userName; });
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (userName, password) {
        this.retrieveData();
        return USERS.find(function (user) { return user.userName === userName; }, function (user) { return user.password === password; });
    };
    // updates the user in local users array whose id matches the userId parameter
    UserService.prototype.updateUser = function (id, user) {
        this.retrieveData();
        var index = USERS.findIndex(function (user) { return user.id === id; });
        USERS[index] = user;
        this.storeData();
    };
    // removes the user whose id matches the userId parameter
    UserService.prototype.deleteUser = function (id) {
        this.retrieveData();
        var index = USERS.findIndex(function (user) { return user.id === id; });
        USERS.splice(index, 1);
        this.storeData();
    };
    UserService.prototype.storeData = function () {
        var storedUsers = JSON.stringify(USERS);
        localStorage.setItem("storedUsers", storedUsers);
    };
    UserService.prototype.retrieveData = function () {
        var retrievedUsers = localStorage.getItem("storedUsers");
        USERS = JSON.parse(retrievedUsers);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map