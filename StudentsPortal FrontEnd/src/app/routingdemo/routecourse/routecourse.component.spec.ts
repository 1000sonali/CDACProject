import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutecourseComponent } from './routecourse.component';

describe('RoutecourseComponent', () => {
  let component: RoutecourseComponent;
  let fixture: ComponentFixture<RoutecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
