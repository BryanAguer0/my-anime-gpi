import { Component, inject, OnDestroy, signal } from '@angular/core';
import { Auth } from '../auth';
import { OAuth } from '../../../../services/o-auth';
import { UserCredentials } from '../../../../models/user';
import { catchError, finalize, Subject, switchMap, takeUntil, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy{
   oAuthService = inject(OAuth);
  router = inject(Router);
  loading = signal<boolean>(false)
  destroy$ = new Subject<boolean>()

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
 

  login(): void {
    this.loading.set(true)
    const fakeCredentials: UserCredentials = {
      email: "ciao@ciao.it",
      password: "ciaociao"

    }
    this.oAuthService.login(fakeCredentials).pipe(
      switchMap((UserCredentials) => this.oAuthService.getUser()),
      takeUntil(this.destroy$),
      finalize(() => {
       this.loading.set(false);
        this.router.navigate([""]);
      }),
      catchError((error) => {
        this.loading.set(false);
        return throwError(() => error);
      })
    ).subscribe()

  }

}
