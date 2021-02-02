import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomInsertComponent } from './classroom-insert.component';

describe('ClassroomInsertComponent', () => {
  let component: ClassroomInsertComponent;
  let fixture: ComponentFixture<ClassroomInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
