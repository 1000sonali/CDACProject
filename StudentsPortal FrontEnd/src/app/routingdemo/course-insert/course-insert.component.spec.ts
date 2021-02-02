import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInsertComponent } from './course-insert.component';

describe('CourseInsertComponent', () => {
  let component: CourseInsertComponent;
  let fixture: ComponentFixture<CourseInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
