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
var router_1 = require("@angular/router");
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.currentUser = null;
        this.url = null;
        this.url = "http://localhost:5000/auth";
    }
    AuthService.prototype.loginUser = function (userName, password) {
        console.log("auth.service username: " + userName + ", password: " + password);
        var params = new http_2.URLSearchParams();
        params.set('userName', userName);
        params.set('password', password);
        return this.http.get(this.url, { search: params, headers: new http_1.Headers({ 'Content-Type': 'text' }) });
    };
    AuthService.prototype.loginNewRegister = function () {
    };
    AuthService.prototype.logoutUser = function () {
    };
    AuthService.prototype.verifyPassword = function (password, duplicate) {
        return password === duplicate;
    };
    AuthService.prototype.isAuthenticated = function () {
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map