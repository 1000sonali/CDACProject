import { TestBed } from '@angular/core/testing';

import { StdguardGuard } from './stdguard.guard';

describe('StdguardGuard', () => {
  let guard: StdguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StdguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
