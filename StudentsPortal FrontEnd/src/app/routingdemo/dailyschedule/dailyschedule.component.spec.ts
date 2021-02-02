import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyscheduleComponent } from './dailyschedule.component';

describe('DailyscheduleComponent', () => {
  let component: DailyscheduleComponent;
  let fixture: ComponentFixture<DailyscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyscheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
