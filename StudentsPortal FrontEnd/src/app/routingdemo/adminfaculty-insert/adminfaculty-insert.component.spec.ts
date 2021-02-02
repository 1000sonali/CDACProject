import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfacultyInsertComponent } from './adminfaculty-insert.component';

describe('AdminfacultyInsertComponent', () => {
  let component: AdminfacultyInsertComponent;
  let fixture: ComponentFixture<AdminfacultyInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfacultyInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfacultyInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
