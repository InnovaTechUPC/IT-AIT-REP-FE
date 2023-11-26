import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import {
  AvatarComponent,
  ButtonDirective,
  CardModule,
  GridModule,
  ProgressBarComponent,
  ProgressComponent
} from "@coreui/angular";
import {IconDirective} from "@coreui/icons-angular";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [ ProjectsComponent ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        GridModule,
        CardModule,
        ButtonDirective,
        IconDirective,
        ProgressComponent,
        ProgressBarComponent,
        AvatarComponent,
        MatProgressSpinnerModule
    ]
})
export class ProjectsModule { }
