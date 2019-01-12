import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMenuBoxComponent } from './dashboard-menu-box.component';

describe('DashboardMenuBoxComponent', () => {
  let component: DashboardMenuBoxComponent;
  let fixture: ComponentFixture<DashboardMenuBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardMenuBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMenuBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
