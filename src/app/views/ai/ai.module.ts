import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiComponent } from "./ai.component";
import { AiRoutingModule } from "./ai-routing.module";
import {
    BadgeComponent, ButtonDirective,
    CardBodyComponent,
    CardComponent, CardImgDirective,
    CardTextDirective,
    CardTitleDirective,
    GridModule
} from "@coreui/angular";
import {MatIconModule} from "@angular/material/icon";
import {IconDirective} from "@coreui/icons-angular";

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
        ButtonDirective
    ]
})
export class AiModule { }
