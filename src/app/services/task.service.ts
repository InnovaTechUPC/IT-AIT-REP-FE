import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { TaskBean } from "../models/TaskBean";
import { Observable } from "rxjs";

const PATH = '/service/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  basePath = environment.BASE_URL;
  taskPath: string;

  constructor(private http: HttpClient) {
    this.taskPath = this.basePath + PATH;
  }

  getTask(id: number): Observable<TaskBean> {
    return this.http.get<TaskBean>(`${this.taskPath}/${id}`);
  }

  getAllTask(): Observable<TaskBean[]> {
    return this.http.get<TaskBean[]>(`${this.taskPath}/all`);
  }

  getTasksByIdProject(idProject: number): Observable<TaskBean[]> {
    return this.http.get<TaskBean[]>(`${this.taskPath}/project/${idProject}`);
  }

  createTask(Task: TaskBean): Observable<TaskBean> {
    return this.http.post<TaskBean>(this.taskPath, Task);
  }

  updateTask(id: number, Task: TaskBean): Observable<TaskBean> {
    return this.http.put<TaskBean>(`${this.taskPath}/${id}`, Task);
  }

  deleteTask(id: number): Observable<TaskBean> {
    return this.http.delete<TaskBean>(`${this.taskPath}/${id}`);
  }


}
