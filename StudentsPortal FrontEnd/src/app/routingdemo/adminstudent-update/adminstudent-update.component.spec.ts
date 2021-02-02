import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudentUpdateComponent } from './adminstudent-update.component';

describe('AdminstudentUpdateComponent', () => {
  let component: AdminstudentUpdateComponent;
  let fixture: ComponentFixture<AdminstudentUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminstudentUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminstudentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
