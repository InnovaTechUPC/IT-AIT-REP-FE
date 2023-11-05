import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from "./statistics.component";
import { StatisticsRoutingModule } from "./statistics-routing.module";
import {
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormCheckComponent,
  FormCheckInputDirective,
  FormCheckLabelDirective,
  GridModule,
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  TabContentComponent,
  TabContentRefDirective,
  TabPaneComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";


@NgModule({
  declarations: [ StatisticsComponent ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    GridModule,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    IconDirective,
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    TabContentComponent,
    TabPaneComponent,
    TabContentRefDirective
  ]
})
export class StatisticsModule { }
