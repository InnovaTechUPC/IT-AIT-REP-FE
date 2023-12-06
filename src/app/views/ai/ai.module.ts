import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiComponent } from "./ai.component";
import { AiRoutingModule } from "./ai-routing.module";
import {
  BadgeComponent, ButtonDirective,
  CardBodyComponent,
  CardComponent, CardFooterComponent, CardImgDirective,
  CardTextDirective,
  CardTitleDirective, FormControlDirective,
  GridModule, InputGroupComponent
} from "@coreui/angular";
import {MatIconModule} from "@angular/material/icon";
import {IconDirective} from "@coreui/icons-angular";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [ AiComponent ],
  imports: [
    CommonModule,
    AiRoutingModule,
    GridModule,
    BadgeComponent,
    CardBodyComponent,
    CardComponent,
    CardTextDirective,
    CardTitleDirective,
    MatIconModule,
    CardImgDirective,
    IconDirective,
    ButtonDirective,
    InputGroupComponent,
    FormControlDirective,
    ReactiveFormsModule,
    CardFooterComponent,
    MatAutocompleteModule
  ]
})
export class AiModule { }
