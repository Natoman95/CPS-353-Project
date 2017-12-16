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
var topic_query_service_1 = require("./../services/topic-query.service");
var academic_query_service_1 = require("./../services/academic-query.service");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var DetailsComponent = (function () {
    function DetailsComponent(router, activatedRoute, academicSvc, topicSvc) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.academicSvc = academicSvc;
        this.topicSvc = topicSvc;
        this.work = null;
        this.topic = null;
        this.subTopics = null;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        // Retrieve stored details from the list of search results
        var detailType = this.activatedRoute.snapshot.params['type'];
        if (detailType === "academic") {
            this.work = this.academicSvc.getDetails();
            console.log(this.work);
        }
        if (detailType === "topic") {
            this.topic = this.topicSvc.getDetails();
            console.log(this.topic);
            // subtopics need to be organized into one string
            this.subTopics = this.concatenateSubTopics(this.topic);
        }
    };
    // Combines the subtopics of a topic into one string to display in a list
    DetailsComponent.prototype.concatenateSubTopics = function (topic) {
        var subTopicsString = null;
        if (topic.subTopics !== undefined) {
            for (var i = 0; i < topic.subTopics.length; i++) {
                if (i !== topic.subTopics.length - 1) {
                    subTopicsString += topic[i] + ", ";
                }
            }
        }
        return subTopicsString;
    };
    DetailsComponent.prototype.search = function () {
        this.router.navigate(["/user/search"]);
    };
    DetailsComponent.prototype.home = function () {
        this.router.navigate(["/user/home"]);
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/components/details.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, academic_query_service_1.AcademicQueryService,
        topic_query_service_1.TopicQueryService])
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
//# sourceMappingURL=details.component.js.map