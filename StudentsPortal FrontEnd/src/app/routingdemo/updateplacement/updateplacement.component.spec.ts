import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateplacementComponent } from './updateplacement.component';

describe('UpdateplacementComponent', () => {
  let component: UpdateplacementComponent;
  let fixture: ComponentFixture<UpdateplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateplacementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
