import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiComponent } from "./ai.component";
import { AiRoutingModule } from "./ai-routing.module";

@NgModule({
  declarations: [ AiComponent ],
  imports: [
    CommonModule,
    AiRoutingModule
  ]
})
export class AiModule { }
