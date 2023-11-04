import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from "./statistics.component";
import { StatisticsRoutingModule } from "./statistics-routing.module";
import { GridModule } from "@coreui/angular";


@NgModule({
  declarations: [ StatisticsComponent ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    GridModule
  ]
})
export class StatisticsModule { }
