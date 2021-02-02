import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfacultyComponent } from './adminfaculty.component';

describe('AdminfacultyComponent', () => {
  let component: AdminfacultyComponent;
  let fixture: ComponentFixture<AdminfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
