import { TestBed } from '@angular/core/testing';

import { ResthubService } from './resthub.service';

describe('ResthubService', () => {
  let service: ResthubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResthubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
