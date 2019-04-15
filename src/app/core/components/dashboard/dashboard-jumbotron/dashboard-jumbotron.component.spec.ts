import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJumbotronComponent } from './dashboard-jumbotron.component';

describe('DashboardJumbotronComponent', () => {
  let component: DashboardJumbotronComponent;
  let fixture: ComponentFixture<DashboardJumbotronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardJumbotronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
