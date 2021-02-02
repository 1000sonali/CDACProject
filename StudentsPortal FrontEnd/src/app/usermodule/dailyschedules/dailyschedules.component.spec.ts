import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyschedulesComponent } from './dailyschedule.component';

describe('DailyscheduleComponent', () => {
  let component: DailyschedulesComponent;
  let fixture: ComponentFixture<DailyschedulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyschedulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
