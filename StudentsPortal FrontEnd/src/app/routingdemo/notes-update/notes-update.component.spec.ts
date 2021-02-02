import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesUpdateComponent } from './notes-update.component';

describe('NotesUpdateComponent', () => {
  let component: NotesUpdateComponent;
  let fixture: ComponentFixture<NotesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
