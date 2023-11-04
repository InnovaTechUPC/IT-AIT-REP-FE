import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsFComponent } from './widgets-f.component';

describe('WidgetsFComponent', () => {
  let component: WidgetsFComponent;
  let fixture: ComponentFixture<WidgetsFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetsFComponent]
    });
    fixture = TestBed.createComponent(WidgetsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
