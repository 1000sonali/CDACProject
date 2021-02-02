import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInsertComponent } from './subject-insert.component';

describe('SubjectInsertComponent', () => {
  let component: SubjectInsertComponent;
  let fixture: ComponentFixture<SubjectInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
