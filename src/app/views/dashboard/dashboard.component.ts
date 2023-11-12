import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ProjectBean } from "../../models/ProjectBean";

const projects: ProjectBean[] = [
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

  }
]

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tasks : any = [];
  projects: any = [];
  activeTabsIndex = 0;
  displayedColumns: string[] = ['id', 'name', 'dueDate', 'status', 'progress'];
  dataSource: MatTableDataSource<ProjectBean>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor() {
    this.dataSource = new MatTableDataSource(projects);
  }

  ngOnInit(): void {
    this.projects = projects;
    this.tasks = tasks;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
