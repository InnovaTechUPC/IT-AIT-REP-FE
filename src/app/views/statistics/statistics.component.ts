import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { TaskService } from "../../services/task.service";
import { ProjectService } from "../../services/project.service";
import { UserService } from "../../services/user.service";
import { ProjectBean } from "../../models/ProjectBean";
import { TaskBean } from "../../models/TaskBean";
import { UserBean } from "../../models/UserBean";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

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

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent  implements OnInit {

  statisticsList: any[] = [];
  projects: ProjectBean[] = [];
  tasks: TaskBean[] = [];
  users: UserBean[] = [];
  projectSelected: ProjectBean;
  activeTabsIndex = 0;
  displayedColumns: string[] = ['name', 'roleName', 'phone', 'email', 'status', 'statics'];
  dataSource: MatTableDataSource<UserBean>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
      private projectService: ProjectService,
      private taskService: TaskService,
      private userService: UserService
  ) {
    this.dataSource = new MatTableDataSource<UserBean>([]);
    this.projectSelected = {
      id: 0,
      name: '',
      description: '',
      date: '',
      status: '',
      progress: 0,
      pendingTask: 0,
      totalMembers: 0
    };
  }

  ngOnInit(): void {
    this.loadTaskData();
    this.statisticsList = statisticsList;
  }

  loadTaskData(): void {
    this.projectService.getAllProject().subscribe(pResponse=> {
      this.projects = pResponse;
      if(this.projects) {
        this.taskService.getTasksByIdProject(this.projects.at(1)!.id).subscribe(tResponse => {
          this.loadProjectAndTaskData(pResponse, tResponse!);
        });
      }
    });

    this.userService.getAllUsers().subscribe(uResponse => {
      this.users = uResponse;
      this.dataSource = new MatTableDataSource(this.users);
      this.updateSortAndPagination();
    });
  }

  updateSortAndPagination(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectProject(id: number): void {
    this.taskService.getTasksByIdProject(id).subscribe(tResponse => {
      this.loadProjectAndTaskData(this.projects, tResponse, id);
    });
  }

  loadProjectAndTaskData(projects: ProjectBean[], tasks: TaskBean[], id: number = 1): void {
    this.tasks = tasks;
    this.projectSelected = projects.find(x => x.id == id)!;
    this.projectSelected.pendingTask = this.tasks.filter(x => !x.completed).length;
  }

  onTabChange($event: number): void {
    this.activeTabsIndex = $event;
  }

  selectColor(status: string): string {
    switch (status) {
      case 'Active':
      case 'Completed':
        return 'success';
      case 'On going':
      case 'Delayed': return 'warning';
      case 'Inactive':
      case 'At risk':
        return 'danger';
      default:
        return ''
    }
  }

  getProgressBar(task: TaskBean): string {
    return ((task.hoursProgress/task.hoursTotal)*100).toFixed(2);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
