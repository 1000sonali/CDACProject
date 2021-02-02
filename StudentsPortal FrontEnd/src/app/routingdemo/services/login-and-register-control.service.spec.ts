import { TestBed } from '@angular/core/testing';

import { LoginAndRegisterControlService } from './login-and-register-control.service';

describe('LoginAndRegisterControlService', () => {
  let service: LoginAndRegisterControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAndRegisterControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
