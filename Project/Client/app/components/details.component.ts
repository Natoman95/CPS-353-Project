import { TopicQueryService } from './../services/topic-query.service';
import { AcademicQueryService } from './../services/academic-query.service';
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: 'app/components/details.component.html'
})

export class DetailsComponent {

  private work = null;
  private topic = null;
  private subTopics = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private academicSvc: AcademicQueryService,
    private topicSvc: TopicQueryService) { }

  ngOnInit() {
    // Retrieve stored details from the list of search results
    let detailType = this.activatedRoute.snapshot.params['type']
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
  }

  // Combines the subtopics of a topic into one string to display in a list
  private concatenateSubTopics(topic) {
    let subTopicsString = null;
    if (topic.subTopics !== undefined) {
      for (let i = 0; i < topic.subTopics.length; i++) {
        if (i !== topic.subTopics.length - 1) {
          subTopicsString += topic[i] + ", ";
        }
      }
    }
    return subTopicsString;
  }

  search() {
    this.router.navigate(["/user/search"]);
  }
}