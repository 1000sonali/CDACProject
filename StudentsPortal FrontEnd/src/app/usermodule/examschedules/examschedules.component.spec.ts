import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamschedulesComponent } from './examschedule.component';

describe('ExamscheduleComponent', () => {
  let component: ExamschedulesComponent;
  let fixture: ComponentFixture<ExamschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamschedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
