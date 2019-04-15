import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosultantFormComponent } from './cosultant-form.component';

describe('CosultantFormComponent', () => {
  let component: CosultantFormComponent;
  let fixture: ComponentFixture<CosultantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosultantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosultantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
