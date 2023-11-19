import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ProjectBean } from "../models/ProjectBean";
import { Observable } from "rxjs";

const PATH = '/service/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  basePath = environment.BASE_URL;
  projectPath: string;

  constructor(private http: HttpClient) {
    this.projectPath = this.basePath + PATH;
  }

  getProject(id: number): Observable<ProjectBean> {
    return this.http.get<ProjectBean>(`${this.projectPath}/${id}`);
  }

  getAllProject(): Observable<ProjectBean[]> {
    return this.http.get<ProjectBean[]>(`${this.projectPath}/all`);
  }

  createProject(Project: ProjectBean): Observable<ProjectBean> {
    return this.http.post<ProjectBean>(this.projectPath, Project);
  }

  updateProject(id: number, Project: ProjectBean): Observable<ProjectBean> {
    return this.http.put<ProjectBean>(`${this.projectPath}/${id}`, Project);
  }

  deleteProject(id: number): Observable<ProjectBean> {
    return this.http.delete<ProjectBean>(`${this.projectPath}/${id}`);
  }


}
