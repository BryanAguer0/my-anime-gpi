import { CanDeactivateFn } from '@angular/router';

export const exitConfirmGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
