import { CanActivateFn } from '@angular/router';

export const isAlreadyAutenticatedGuard: CanActivateFn = (route, state) => {
  return true;
};
