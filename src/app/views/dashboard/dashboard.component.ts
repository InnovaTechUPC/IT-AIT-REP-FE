import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { ProjectBean } from "../../models/ProjectBean";
import { ProjectService } from "../../services/project.service";
// import { TaskBean } from "../../models/TaskBean";

/*
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
*/

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // tasks : TaskBean[] = [];
  projects: ProjectBean[] = [];
  displayedColumns: string[] = ['id', 'name', 'date', 'status', 'progress'];
  dataSource: MatTableDataSource<ProjectBean>;
  // activeTabsIndex = 0;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private projectService: ProjectService
  ) {
      this.dataSource = new MatTableDataSource<ProjectBean>([]);
  }

  ngOnInit(): void {
    this.loadTable();
    // this.tasks = tasks;
  }

  loadTable(): void {
    this.projectService.getAllProject().subscribe(response=> {
        this.projects = response;
        this.dataSource = new MatTableDataSource(this.projects);
        this.isLoading = !(this.dataSource.data.length == 0);
        this.updateSortAndPagination();
    });
  }

  updateSortAndPagination(): void {
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

/*  onTabChange($event: number): void {
    this.activeTabsIndex = $event;
  }*/

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
