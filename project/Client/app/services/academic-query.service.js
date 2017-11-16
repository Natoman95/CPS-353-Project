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
require("rxjs/add/operator/map");
var AcademicQueryService = (function () {
    function AcademicQueryService(http) {
        this.http = http;
        this.url = "http://localhost:5000/microsoft-academic/academicquery";
    }
    // Takes a user query and searches microsoft academic knowledge for relevant results via another server
    AcademicQueryService.prototype.search = function (query) {
        console.log("academic-query.service query: " + query);
        var params = new http_2.URLSearchParams();
        params.set('query', query);
        this.http.get(this.url, { search: params, headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .map(function (response) {
            console.log("Getting search results from server");
            // get requests return an array of users
            AcademicQueryService.searchResults = response.json();
            console.log(AcademicQueryService.searchResults);
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    // The results of the search function are stored statically in this class
    AcademicQueryService.prototype.getSearchResults = function () {
        return AcademicQueryService.searchResults;
    };
    // This class also stores the details of a particular search result item
    AcademicQueryService.prototype.getDetails = function () {
        return AcademicQueryService.details;
    };
    // This sets the detailed information for a particular search result item
    AcademicQueryService.prototype.setDetails = function (work) {
        AcademicQueryService.details = work;
    };
    return AcademicQueryService;
}());
AcademicQueryService.searchResults = null;
AcademicQueryService.details = null;
AcademicQueryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AcademicQueryService);
exports.AcademicQueryService = AcademicQueryService;
//# sourceMappingURL=academic-query.service.js.map