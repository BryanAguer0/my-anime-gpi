import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { exitConfirmGuard } from './exit-confirm-guard';

describe('exitConfirmGuard', () => {
  const executeGuard: CanDeactivateFn<unknown> = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitConfirmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
