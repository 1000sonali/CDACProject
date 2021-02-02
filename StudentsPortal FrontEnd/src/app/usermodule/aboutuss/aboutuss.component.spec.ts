import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutussComponent } from './aboutus.component';

describe('AboutusComponent', () => {
  let component: AboutussComponent;
  let fixture: ComponentFixture<AboutussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
