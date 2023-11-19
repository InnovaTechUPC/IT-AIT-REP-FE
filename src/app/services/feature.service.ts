import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { FeatureBean } from "../models/FeatureBean";
import { Observable } from "rxjs";

const PATH = '/service/feature';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  basePath = environment.BASE_URL;
  featurePath: string;

  constructor(private http: HttpClient) {
    this.featurePath = this.basePath + PATH;
  }

  getFeature(id: number): Observable<FeatureBean> {
      return this.http.get<FeatureBean>(`${this.featurePath}/${id}`);
  }

  getAllFeature(): Observable<FeatureBean[]> {
      return this.http.get<FeatureBean[]>(`${this.featurePath}/all`);
  }

  createFeature(Feature: FeatureBean): Observable<FeatureBean> {
    return this.http.post<FeatureBean>(this.featurePath, Feature);
  }

  updateFeature(id: number, Feature: FeatureBean): Observable<FeatureBean> {
    return this.http.put<FeatureBean>(`${this.featurePath}/${id}`, Feature);
  }

  deleteFeature(id: number): Observable<FeatureBean> {
    return this.http.delete<FeatureBean>(`${this.featurePath}/${id}`);
  }


}
