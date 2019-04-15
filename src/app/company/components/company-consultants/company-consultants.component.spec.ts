import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyConsultantsComponent } from './company-consultants.component';

describe('CompanyConsultantsComponent', () => {
  let component: CompanyConsultantsComponent;
  let fixture: ComponentFixture<CompanyConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
