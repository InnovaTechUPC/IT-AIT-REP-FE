import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {AiService} from "../../services/ai.service";
import {AiChatRequest} from "../../models/AiChatRequest";
import {AiChatResponse} from "../../models/AiChatResponse";

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {

  msjRequest: AiChatRequest;
  msjResponse: AiChatResponse;
  msjRequestControl = new FormControl('');
  msjList: AiChatResponse[] = [];

  constructor(private aiService: AiService) {
    this.msjRequest = {
      request: ''
    }
    this.msjResponse = {
      response: '',
      useType: ''
    }
  }

  ngOnInit(): void {

  }

  sendMessage(): void {
    this.msjRequest.request = this.msjRequestControl.value ?? '';

    // Agregar respuesta del usuario
    this.addMessageToMsjList('USER', this.msjRequest.request);

    this.aiService.sendMessageToAi(this.msjRequest).subscribe(response => {
      this.msjRequestControl.setValue('');

      // Agregar respuesta de la inteligencia artificial
      this.addMessageToMsjList('AI', response.response);
    });
  }

  private addMessageToMsjList(useType: string, response: string): void {
    const newResponse: AiChatResponse = {
      response: response,
      useType: useType
    };

    this.msjList.push(newResponse);
  }
}

