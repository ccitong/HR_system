import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMainMenuComponent } from './updateemployee-main-menu.component';

describe('DepartmentsMainMenuComponent', () => {
  let component: DepartmentsMainMenuComponent;
  let fixture: ComponentFixture<DepartmentsMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentsMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
