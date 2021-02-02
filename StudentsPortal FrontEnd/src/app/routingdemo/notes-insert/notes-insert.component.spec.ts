import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesInsertComponent } from './notes-insert.component';

describe('NotesInsertComponent', () => {
  let component: NotesInsertComponent;
  let fixture: ComponentFixture<NotesInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
