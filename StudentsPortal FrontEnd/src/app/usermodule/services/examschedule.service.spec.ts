import { TestBed } from '@angular/core/testing';

import { ExamscheduleService } from './examschedule.service';

describe('ExamscheduleService', () => {
  let service: ExamscheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamscheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
