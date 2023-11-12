import { Component, OnInit } from '@angular/core';

const projects = [
  {
    id: 1,
    name: 'Project',
    progress: 45,
    members: 30,
    pendingTask: '0'
  },
  {
    id: 2,
    name: 'Project',
    progress: 66,
    members: 12,
    pendingTask: '0'
  },
  {
    id: 3,
    name: 'Project',
    progress: 33,
    members: 5,
    pendingTask: '0'
  },
  {
    id: 4,
    name: 'Project',
    progress: 20,
    members: 4,
    pendingTask: '0'
  },
  {
    id: 5,
    name: 'Project',
    progress: 22,
    members: 2,
    pendingTask: '0'
  },
  {
    id: 6,
    name: 'Project',
    progress: 75,
    members: 10,
    pendingTask: '0'
  }
];

const tasks = [
  {
    id: 1,
    idProject: 2,
    name: 'Task',
    progress: 43
  },
  {
    id: 2,
    idProject: 3,
    name: 'Task',
    progress: 25
  },
  {
    id: 3,
    idProject: 1,
    name: 'Task',
    progress: 41
  },
  {
    id: 4,
    idProject: 2,
    name: 'Task',
    progress: 12
  },
  {
    id: 5,
    idProject: 6,
    name: 'Task',
    progress: 23
  },
  {
    id: 6,
    idProject: 5,
    name: 'Task',
    progress: 90
  }
];

const statisticsList = [
  {
    name: 'By projects',
    icon: 'cilChartLine'
  },
  {
    name: 'By Members',
    icon: 'cilGroup'
  }
]

const members = [
  {
    name: 'Jane Cooper',
    position: 'Support',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    status: 'active',
    statics: ''
  },
  {
    name: 'Floyd Miles',
    position: 'Support',
    phone: '(205) 555-0100',
    email: 'floyd@yahoo.com',
    status: 'inactive',
    statics: ''
  },
  {
    name: 'Ronald Richards',
    position: 'Support',
    phone: '(302) 555-0107',
    email: 'ronald@adobe.com',
    status: 'inactive',
    statics: ''
  },
  {
    name: 'Marvin McKinney',
    position: 'Support',
    phone: '(252) 555-0126',
    email: 'marvin@tesla.com',
    status: 'active',
    statics: ''
  },
  {
    name: 'Jerome Bell',
    position: 'Support',
    phone: '(629) 555-0129',
    email: 'jerome@google.com',
    status: 'active',
    statics: ''
  }
];

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  implements OnInit {

  statisticsList: any[] = [];
  projects: any = [];
  tasks: any[] = [];
  members: any[] = [];

  projectSelected: any = {}
  activeTabsIndex = 0;

  ngOnInit(): void {
    this.projects = projects;
    this.statisticsList = statisticsList;
    this.tasks = tasks.filter(x => x.idProject == 1);
    projects.filter(x => {
      if(x.id == 1) {
        this.projectSelected = x;
      }
    });
    this.projectSelected.pendingTask = this.tasks.filter(x => x.value != 100).length.toString();
    this.members = members;
  }

  selectColor(status: string): string {
    switch (status) {
      case 'active':
      case 'Completed':
        return 'success';
      case 'On going':
      case 'Delayed': return 'warning';
      case 'inactive':
      case 'At risk':
        return 'danger';
      default:
        return ''
    }
  }

  onTabChange($event: number): void {
    this.activeTabsIndex = $event;
  }

  selectProject(id: number): void {
    this.tasks = tasks.filter(x => x.idProject == id);
    projects.filter(x => {
     if(x.id == id) {
       this.projectSelected = x;
     }
    });
    this.projectSelected.pendingTask = this.tasks.filter(x => x.value != 100).length.toString();
  }
}
