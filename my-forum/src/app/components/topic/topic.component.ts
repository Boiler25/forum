import { Component, OnInit } from '@angular/core';
import { Topic } from 'src/app/models/topic';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  topic: Topic;
  constructor() {
  }

  ngOnInit() {
    this.topic = new Topic();
    this.topic.name = 'Topic name';
    this.topic.date = '18/04/2019';
    this.topic.authorName = 'Neks';
    this.topic.answersCount = 123;
  }

}
