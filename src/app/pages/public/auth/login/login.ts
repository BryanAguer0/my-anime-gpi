import { Component, inject, OnDestroy, signal } from '@angular/core';
import { OAuth } from '../../../../services/o-auth';
import { UserCredentials } from '../../../../models/user';
import { catchError, finalize, Subject, switchMap, takeUntil, throwError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy{
   oAuthService = inject(OAuth);
  router = inject(Router);
  loading = signal<boolean>(false)
  destroy$ = new Subject<boolean>()
  userCredentials:UserCredentials = {email: "", password:""}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  login(): void {
    this.loading.set(true)
    this.oAuthService.login(this.userCredentials).pipe(
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

  onSubmit(form:NgForm) {
    console.log(form)
    console.log(this.userCredentials)
    if (form.valid) {
      this.login();
    }
  }

}
