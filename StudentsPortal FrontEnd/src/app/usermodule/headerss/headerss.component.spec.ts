import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderssComponent } from './headerss.component';

describe('HeadersComponent', () => {
  let component: HeaderssComponent;
  let fixture: ComponentFixture<HeaderssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
