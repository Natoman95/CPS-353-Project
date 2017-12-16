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
    this.work = this.academicSvc.getDetails();
    this.topic = this.topicSvc.getDetails();
    // subtopics need to be organized into one string
    this.subTopics = this.concatenateSubTopics(this.topic);
    console.log(this.work);
  }

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