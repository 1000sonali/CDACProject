import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamscheduleInsertComponent } from './examschedule-insert.component';

describe('ExamscheduleInsertComponent', () => {
  let component: ExamscheduleInsertComponent;
  let fixture: ComponentFixture<ExamscheduleInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamscheduleInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamscheduleInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
