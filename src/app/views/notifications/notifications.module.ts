import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ModalModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  ToastModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    DocsComponentsModule,
    AlertModule,
    GridModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    FormModule,
    ModalModule,
    ToastModule,
    SharedModule,
    UtilitiesModule,
    TooltipModule,
    PopoverModule,
    ProgressModule,
    IconModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class NotificationsModule {
}
