import { Component } from '@angular/core';
import { cilBell, cilFile, cilText, cilChart } from '@coreui/icons';
@Component({
  selector: 'app-widgets-f',
  templateUrl: './widgets-f.component.html',
  styleUrls: ['./widgets-f.component.scss']
})
export class WidgetsFComponent {
  icons = { cilBell, cilFile, cilText, cilChart };
}
