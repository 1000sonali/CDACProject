import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudentInsertComponent } from './adminstudent-insert.component';

describe('AdminstudentInsertComponent', () => {
  let component: AdminstudentInsertComponent;
  let fixture: ComponentFixture<AdminstudentInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstudentInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
