import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyscheduleInsertComponent } from './dailyschedule-insert.component';

describe('DailyscheduleInsertComponent', () => {
  let component: DailyscheduleInsertComponent;
  let fixture: ComponentFixture<DailyscheduleInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyscheduleInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyscheduleInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
