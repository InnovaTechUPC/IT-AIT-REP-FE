import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from "./settings.component";
import { SettingsRoutingModule } from "./settings-routing.module";
import { GridModule } from "@coreui/angular";

@NgModule({
  declarations: [ SettingsComponent ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    GridModule
  ]
})
export class SettingsModule { }
