import { Component, OnInit } from '@angular/core';
import { ProjectService } from "../../services/project.service";
import { ProjectBean } from "../../models/ProjectBean";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: ProjectBean[] = [];

  constructor(private projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.loadTable();
  }

  loadTable(): void {
    this.projectService.getAllProject().subscribe(pResponse=> {
      this.projects = pResponse;
    });
  }

}
