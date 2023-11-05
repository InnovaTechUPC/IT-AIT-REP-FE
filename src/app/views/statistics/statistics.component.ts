import { Component, OnInit } from '@angular/core';


const projects = [
  {
    id: 1,
    name: 'Nelsa web developement',
    dueDate: '2023-03-25',
    status: 'Completed',
    progress: 45
  },
  {
    id: 2,
    name: 'Datascale AI app ',
    dueDate: '2023-10-01',
    status: 'Delayed',
    progress: 45
  },
  {
    id: 3,
    name: 'Media channel branding',
    dueDate: '2023-05-22',
    status: 'At risk',
    progress: 45
  },
  {
    id: 4,
    name: 'Corlax iOS app develpoement',
    dueDate: '2023-06-25',
    status: 'On going',
    progress: 45
  },
  {
    id: 5,
    name: 'Create a user flow of social application design',
    dueDate: '2023-12-20',
    status: 'Completed',
    progress: 100
  },
  {
    id: 6,
    name: 'Website builder developement',
    dueDate: '2024-04-15',
    status: 'Completed',
    progress: 45
  }
];

const tasks = [
  {
    name: 'All',
    itemList: [
      {
        id: 1,
        description: 'Others List 1',
        checked: false
      },
      {
        id: 2,
        description: 'Other List 2',
        checked: true
      },
      {
        id: 3,
        description: 'Other List 3',
        checked: false
      }
    ]

  },
  {
    name: 'Notes',
    itemList: [
      {
        id: 1,
        description: 'Create a user flow of social application design',
        checked: false
      },
      {
        id: 2,
        description: 'Landing page design for Fintech project of singapore',
        checked: true
      },
      {
        id: 3,
        description: 'Interactive prototype for app screens of delta mine project',
        checked: false
      }
    ]
  }
]

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  implements OnInit {

  statisticsList : any = [];
  projects: any = [];
  activeTabsIndex = 0;

  ngOnInit(): void {
    this.projects = projects;
    this.statisticsList = tasks;
  }

  selectColor(status: string): string {
    switch (status) {
      case 'Completed': return 'success';
      case 'On going':
      case 'Delayed': return 'warning';
      case 'At risk': return 'danger';
      default:
        return ''
    }
  }

  onTabChange($event: number): void {
    this.activeTabsIndex = $event;
  }
}
