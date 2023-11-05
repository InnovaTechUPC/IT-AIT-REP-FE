import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from "./plans.component";
import { PlansRoutingModule } from "./plans-routing.module";
import { GridModule } from "@coreui/angular";

@NgModule({
  declarations: [ PlansComponent ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    GridModule
  ]
})
export class PlansModule { }
