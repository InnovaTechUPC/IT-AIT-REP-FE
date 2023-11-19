import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from "./statistics.component";
import { StatisticsRoutingModule } from "./statistics-routing.module";
import {
    AvatarComponent,
    BadgeComponent,
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
    PageItemDirective,
    PageLinkDirective,
    PaginationComponent,
    ProgressBarComponent,
    ProgressComponent,
    TabContentComponent,
    TabContentRefDirective,
    TableColorDirective,
    TableDirective,
    TabPaneComponent,
    TemplateIdDirective,
    WidgetStatCComponent,
    WidgetStatEComponent
} from "@coreui/angular";
import { IconDirective } from "@coreui/icons-angular";
import { ChartjsComponent } from "@coreui/angular-chartjs";
import { NumberWithZero } from "../../pipes/number-with-zero";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [ StatisticsComponent, NumberWithZero ],
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
        TemplateIdDirective,
        BadgeComponent,
        TableColorDirective,
        TableDirective,
        PaginationComponent,
        PageItemDirective,
        PageLinkDirective,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class StatisticsModule { }
