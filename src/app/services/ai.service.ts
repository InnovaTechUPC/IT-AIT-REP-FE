import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { AiBean } from "../models/AiBean";
import { Observable } from "rxjs";
import {AiChatRequest} from "../models/AiChatRequest";
import {AiChatResponse} from "../models/AiChatResponse";

const PATH = '/service/ai';
const PATH_CHAT = '/service/ai-chat';
@Injectable({
  providedIn: 'root'
})
export class AiService {

  basePath = environment.BASE_URL;
  aiPath: string;
  aiChatPath: string;

  constructor(private http: HttpClient) {
    this.aiPath = this.basePath + PATH;
    this.aiChatPath = this.basePath + PATH_CHAT;
  }

  sendMessageToAi(aiChatRequest: AiChatRequest): Observable<AiChatResponse> {
    return this.http.post<AiChatResponse>(this.aiChatPath, aiChatRequest);
  }

  getAi(id: number): Observable<AiBean> {
      return this.http.get<AiBean>(`${this.aiPath}/${id}`);
  }

  getAllAi(): Observable<AiBean[]> {
      return this.http.get<AiBean[]>(`${this.aiPath}/all`);
  }

  createAi(Ai: AiBean): Observable<AiBean> {
    return this.http.post<AiBean>(this.aiPath, Ai);
  }

  updateAi(id: number, Ai: AiBean): Observable<AiBean> {
    return this.http.put<AiBean>(`${this.aiPath}/${id}`, Ai);
  }

  deleteAi(id: number): Observable<AiBean> {
    return this.http.delete<AiBean>(`${this.aiPath}/${id}`);
  }


}
