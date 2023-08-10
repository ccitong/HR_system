import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainMenuComponent } from './employee-main-menu.component';

describe('EmployeeMainMenuComponent', () => {
  let component: EmployeeMainMenuComponent;
  let fixture: ComponentFixture<EmployeeMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
