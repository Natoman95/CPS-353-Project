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
var TopicQueryService = (function () {
    function TopicQueryService(http) {
        this.http = http;
        this.url = "http://localhost:5000/topic";
    }
    // Takes a user query and send it to the server to find related topics
    TopicQueryService.prototype.search = function (query) {
        console.log("query: " + query);
        var params = new http_2.URLSearchParams();
        params.set('query', query);
        this.http.get(this.url, { search: params, headers: new http_1.Headers({ 'Content-Type': 'application/json' }) })
            .map(function (response) {
            console.log("Getting search results from server");
            // get requests return an array of users
            TopicQueryService.searchResults = response.json();
            console.log(TopicQueryService.searchResults);
        })
            .subscribe(function (response) {
            console.log("Success");
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    // The results of the search function are stored statically in this class
    TopicQueryService.prototype.getSearchResults = function () {
        return TopicQueryService.searchResults;
    };
    // This class also stores the details of a particular search result item
    TopicQueryService.prototype.getDetails = function () {
        return TopicQueryService.details;
    };
    // This sets the detailed information for a particular search result item
    TopicQueryService.prototype.setDetails = function (topic) {
        TopicQueryService.details = topic;
    };
    return TopicQueryService;
}());
TopicQueryService.searchResults = null;
TopicQueryService.details = null;
TopicQueryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TopicQueryService);
exports.TopicQueryService = TopicQueryService;
//# sourceMappingURL=topic-query.service.js.map