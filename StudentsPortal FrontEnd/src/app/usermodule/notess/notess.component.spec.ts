import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotessComponent } from './notes.component';

describe('NotesComponent', () => {
  let component: NotessComponent;
  let fixture: ComponentFixture<NotessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
