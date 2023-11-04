import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiComponent } from "./ai.component";
import { AiRoutingModule } from "./ai-routing.module";
import { GridModule } from "@coreui/angular";

@NgModule({
  declarations: [ AiComponent ],
  imports: [
    CommonModule,
    AiRoutingModule,
    GridModule
  ]
})
export class AiModule { }
