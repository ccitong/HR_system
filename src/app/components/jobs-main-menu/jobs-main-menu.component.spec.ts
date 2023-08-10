import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsMainMenuComponent } from './jobs-main-menu.component';

describe('JobsMainMenuComponent', () => {
  let component: JobsMainMenuComponent;
  let fixture: ComponentFixture<JobsMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsMainMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
