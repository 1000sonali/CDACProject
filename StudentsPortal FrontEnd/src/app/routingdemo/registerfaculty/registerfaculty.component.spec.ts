import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfacultyComponent } from './registerfaculty.component';

describe('RegisterfacultyComponent', () => {
  let component: RegisterfacultyComponent;
  let fixture: ComponentFixture<RegisterfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
