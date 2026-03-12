import { JsonPipe } from '@angular/common';
import { Component, inject, OnDestroy, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Subject } from 'rxjs';
import { UserCredentials } from '../../../../models/user';
import { AuthStore } from '../../../../store/auth.store';

@Component({
  selector: 'app-login',
  imports: [FormsModule, JsonPipe, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnDestroy {
  // oAuthService = inject(OAuth);
  router = inject(Router);
  authStore = inject(AuthStore)
  loading = this.authStore.loading
  destroy$ = new Subject<boolean>()
  userCredentials: UserCredentials = { email: "", password: "" }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


  login(): void {
    /*
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
    ).subscribe()*/
    this.authStore.login({userCredential:this.userCredentials})

  }

  onSubmit(form: NgForm) {
    console.log(form)
    console.log(this.userCredentials)
    if (form.valid) {
      this.login();
    }
  }

}
