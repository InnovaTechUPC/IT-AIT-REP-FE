import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { UserBean } from "../models/UserBean";
import { Observable } from "rxjs";

const PATH = '/service/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  basePath = environment.BASE_URL;
  userPath: string;

  constructor(private http: HttpClient) {
    this.userPath = this.basePath + PATH;
  }

  getUser(id: number): Observable<UserBean> {
      return this.http.get<UserBean>(`${this.userPath}/${id}`);
  }

  getAllUsers(): Observable<UserBean[]> {
      return this.http.get<UserBean[]>(`${this.userPath}/all`);
  }

  createUser(User: UserBean): Observable<UserBean> {
    return this.http.post<UserBean>(this.userPath, User);
  }

  updateUser(id: number, User: UserBean): Observable<UserBean> {
    return this.http.put<UserBean>(`${this.userPath}/${id}`, User);
  }

  deleteUser(id: number): Observable<UserBean> {
    return this.http.delete<UserBean>(`${this.userPath}/${id}`);
  }


}
