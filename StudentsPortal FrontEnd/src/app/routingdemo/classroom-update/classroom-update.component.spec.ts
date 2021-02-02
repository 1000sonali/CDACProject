import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomUpdateComponent } from './classroom-update.component';

describe('ClassroomUpdateComponent', () => {
  let component: ClassroomUpdateComponent;
  let fixture: ComponentFixture<ClassroomUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
