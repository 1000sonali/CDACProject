import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminupdatepassComponent } from './adminupdatepass.component';

describe('AdminupdatepassComponent', () => {
  let component: AdminupdatepassComponent;
  let fixture: ComponentFixture<AdminupdatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminupdatepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminupdatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
