import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

const notes = [
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
];


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
    id: 1,
    name: 'All',
    isActive: true
  },
  {
    id: 2,
    name: 'Notes',
    isActive: false
  }
]

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks : any = [];
  notes: any= [];
  projects: any = [];

  constructor(private chartsData: DashboardChartsData) {
  }

  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    this.notes = notes;
    this.projects = projects;
    this.tasks = tasks;
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
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

  selectNav(taskName: string): void {
    this.tasks.forEach((x: { isActive: boolean; name: string; }) =>  x.isActive = x.name == taskName);
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
