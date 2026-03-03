import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isAlreadyAutenticatedGuard } from './is-already-autenticated-guard';

describe('isAlreadyAutenticatedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isAlreadyAutenticatedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
