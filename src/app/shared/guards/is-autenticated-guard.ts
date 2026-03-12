import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../../store/auth.store';

export const isAutenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const oAuth = inject(AuthStore);
  const isUserExist = oAuth.isAuthenticated();

  console.log(route, state);
  if (isUserExist) return true; 
  return router.navigate(["public"]);
};
