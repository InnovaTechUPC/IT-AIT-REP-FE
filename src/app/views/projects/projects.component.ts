import {Component, OnInit} from '@angular/core';

const cards = [
  {
    title: 'Fintech Mobile App UI 1',
    subtitle: '2023-07-10',
    content: 'Fintech app development provides more freedom to banking and others financial institutions',
    color: 'danger',
    percent: 15
  },
  {
    title: 'Fintech Mobile App UI 1',
    subtitle: '2023-07-10',
    content: 'Fintech app development provides more freedom to banking and others financial institutions',
    color: 'warning',
    percent: 39
  },
  {
    title: 'Fintech Mobile App UI 1',
    subtitle: '2023-07-10',
    content: 'Fintech app development provides more freedom to banking and others financial institutions',
    color: 'success',
    percent: 40
  },
  {
    title: 'Fintech Mobile App UI 1',
    subtitle: '2023-07-10',
    content: 'Fintech app development provides more freedom to banking and others financial institutions',
    color: 'info',
    percent: 33
  }
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  cards: any;

  ngOnInit(): void {
    this.cards = cards;
  }

}
