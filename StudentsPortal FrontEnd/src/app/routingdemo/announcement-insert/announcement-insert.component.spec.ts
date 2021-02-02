import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementInsertComponent } from './announcement-insert.component';

describe('AnnouncementInsertComponent', () => {
  let component: AnnouncementInsertComponent;
  let fixture: ComponentFixture<AnnouncementInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementInsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
