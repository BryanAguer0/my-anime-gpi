import { CanActivateFn, Router } from '@angular/router';
import { OAuth } from '../../services/o-auth';
import { inject } from '@angular/core';

export const isAlreadyAutenticatedGuard: CanActivateFn = (route, state) => {
  const oAuthService = inject(OAuth);
  const router = inject(Router);
  const isLoggedIn = oAuthService.isUserExist();

  if (isLoggedIn) {
    router.navigate(['private'])
  }
  return true;
};
