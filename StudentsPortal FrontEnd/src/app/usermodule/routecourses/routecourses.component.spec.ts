import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutecoursesComponent } from './routecourses.component';

describe('RoutecourseComponent', () => {
  let component: RoutecoursesComponent;
  let fixture: ComponentFixture<RoutecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutecoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
