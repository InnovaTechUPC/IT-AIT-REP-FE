import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { RoleBean } from "../models/RoleBean";
import { Observable } from "rxjs";

const PATH = '/service/role';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  basePath = environment.BASE_URL;
  rolePath: string;

  constructor(private http: HttpClient) {
    this.rolePath = this.basePath + PATH;
  }

  getRole(id: number): Observable<RoleBean> {
      return this.http.get<RoleBean>(`${this.rolePath}/${id}`);
  }

  getAllRole(): Observable<RoleBean[]> {
      return this.http.get<RoleBean[]>(`${this.rolePath}/all`);
  }

  createRole(Role: RoleBean): Observable<RoleBean> {
    return this.http.post<RoleBean>(this.rolePath, Role);
  }

  updateRole(id: number, Role: RoleBean): Observable<RoleBean> {
    return this.http.put<RoleBean>(`${this.rolePath}/${id}`, Role);
  }

  deleteRole(id: number): Observable<RoleBean> {
    return this.http.delete<RoleBean>(`${this.rolePath}/${id}`);
  }


}
