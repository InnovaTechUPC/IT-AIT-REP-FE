import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from "./statistics.component";
import { StatisticsRoutingModule } from "./statistics-routing.module";
import {
  AvatarComponent,
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
  ProgressBarComponent,
  ProgressComponent,
  TabContentComponent,
  TabContentRefDirective,
  TabPaneComponent,
  TemplateIdDirective,
  WidgetStatCComponent,
  WidgetStatEComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {ChartjsComponent} from "@coreui/angular-chartjs";


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
    TabContentRefDirective,
    AvatarComponent,
    ProgressComponent,
    ProgressBarComponent,
    WidgetStatEComponent,
    ChartjsComponent,
    WidgetStatCComponent,
    TemplateIdDirective
  ]
})
export class StatisticsModule { }
