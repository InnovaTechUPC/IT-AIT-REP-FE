import {Component, OnInit} from '@angular/core';

const features = [
  {
    id: 1,
    title: 'Task Recommendation',
    content: 'Recommend tasks based on the capabilities of each worker.',
    actions: "Try blogs Content",
    icon: 'cilTask'
  },
 
  {
    id: 3,
    title: 'Project Progress System',
    content: 'Gather and analyze real-time data related to the progress of projects.',
    actions: "Try blogs Content",
    icon: 'cilChartLine'
  },
  {
    id: 4,
    title: 'Worker performance',
    content: 'Which workers have low performance in order to provide them with training.',
    actions: "Try blogs Content",
    icon: 'cilSearch'
  }
]

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {

  features: any[] = []

  ngOnInit(): void {
    this.features = features;
  }
}

