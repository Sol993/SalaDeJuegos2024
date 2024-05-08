import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validaruserguardGuard } from './validaruserguard.guard';

describe('validaruserguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validaruserguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
