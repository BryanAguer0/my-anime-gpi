import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OAuth } from '../../services/o-auth';

export const isAutenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const oAuth = inject(OAuth);
  const isUserExist = oAuth.isUserExist();

  console.log(route, state);
  if (isUserExist) return true; 
  return router.navigate(["public"]);
};
