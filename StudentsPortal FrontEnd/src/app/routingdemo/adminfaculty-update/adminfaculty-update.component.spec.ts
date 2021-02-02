import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfacultyUpdateComponent } from './adminfaculty-update.component';

describe('AdminfacultyUpdateComponent', () => {
  let component: AdminfacultyUpdateComponent;
  let fixture: ComponentFixture<AdminfacultyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfacultyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfacultyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
