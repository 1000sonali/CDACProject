import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentInsertComponent } from './assignment-insert.component';

describe('AssignmentInsertComponent', () => {
  let component: AssignmentInsertComponent;
  let fixture: ComponentFixture<AssignmentInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignmentInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
