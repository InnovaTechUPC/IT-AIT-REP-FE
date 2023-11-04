import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MessagesComponent } from "./messages.component";
import { MessagesRoutingModule } from "./messages-routing.module";
import { GridModule } from "@coreui/angular";

@NgModule({
  declarations: [ MessagesComponent ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    GridModule
  ]
})
export class MessagesModule { }
