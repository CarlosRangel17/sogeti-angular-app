import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorDashboardComponent } from './regulator-dashboard.component';

describe('RegulatorDashboardComponent', () => {
  let component: RegulatorDashboardComponent;
  let fixture: ComponentFixture<RegulatorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegulatorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulatorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
