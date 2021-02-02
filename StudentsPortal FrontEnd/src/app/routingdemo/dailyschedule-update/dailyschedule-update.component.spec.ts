import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyscheduleUpdateComponent } from './dailyschedule-update.component';

describe('DailyscheduleUpdateComponent', () => {
  let component: DailyscheduleUpdateComponent;
  let fixture: ComponentFixture<DailyscheduleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyscheduleUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyscheduleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
