import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamscheduleComponent } from './examschedule.component';

describe('ExamscheduleComponent', () => {
  let component: ExamscheduleComponent;
  let fixture: ComponentFixture<ExamscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
