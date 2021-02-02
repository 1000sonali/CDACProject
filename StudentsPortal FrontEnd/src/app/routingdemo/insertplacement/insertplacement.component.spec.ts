import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertplacementComponent } from './insertplacement.component';

describe('InsertplacementComponent', () => {
  let component: InsertplacementComponent;
  let fixture: ComponentFixture<InsertplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
