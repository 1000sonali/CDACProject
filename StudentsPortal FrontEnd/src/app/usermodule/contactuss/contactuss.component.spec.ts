import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactussComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactussComponent;
  let fixture: ComponentFixture<ContactussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
