import { TestBed } from '@angular/core/testing';

import { NewguardGuard } from './newguard.guard';

describe('NewguardGuard', () => {
  let guard: NewguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NewguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
