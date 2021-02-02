import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfacultyUpdateComponent } from './registerfaculty-update.component';

describe('RegisterfacultyUpdateComponent', () => {
  let component: RegisterfacultyUpdateComponent;
  let fixture: ComponentFixture<RegisterfacultyUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfacultyUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfacultyUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
