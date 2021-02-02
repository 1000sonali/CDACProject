import { TestBed } from '@angular/core/testing';

import { DailyscheduleService } from './dailyschedule.service';

describe('DailyscheduleService', () => {
  let service: DailyscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
