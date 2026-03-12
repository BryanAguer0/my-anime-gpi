import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

export const isAlreadyAutenticatedGuard: CanActivateFn = (route, state) => {
  const oAuthService = inject(AuthStore);
  const router = inject(Router);
  const isLoggedIn = oAuthService.isAuthenticated();

  if (isLoggedIn) {
    router.navigate(['private'])
  }
  return true;
};
