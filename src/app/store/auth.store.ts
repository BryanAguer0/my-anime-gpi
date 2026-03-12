import { patchState, signalStore, withComputed, withMethods, withProps, withState } from "@ngrx/signals";
import { AuthState } from "../models/auth.model";
import { computed, inject } from "@angular/core";
import { OAuth } from "../services/o-auth";
import { Router } from "@angular/router";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { User, UserCredentials } from "../models/user";
import { distinctUntilChanged, finalize, pipe, switchMap, tap } from "rxjs";
import { tapResponse } from '@ngrx/operators'
import { withReset, withStorageSync } from "@angular-architects/ngrx-toolkit";


const initialState: AuthState = {
    user: undefined,
    token: undefined,
    errors: undefined,
    loading: false
}

export const AuthStore = signalStore(
    { providedIn: 'root' },
    withState<AuthState>(initialState),
    withReset(),
    withComputed(({ user, token }) =>
    ({
        isAuthenticated: computed(() => {
            return user() !== undefined && token() !== undefined
        })
    })
    ),
    withProps(() =>
    ({
        authService: inject(OAuth),
        router: inject(Router)
    })
    ),
    withStorageSync({
        key:'AUTH',
        select:({user,token})=>({user,token})
    }),
    withMethods(({ authService, router, ...store }) =>
    ({
        login: rxMethod<{ userCredential: UserCredentials }>(
            pipe(
                distinctUntilChanged(),
                tap(() => patchState(store, { loading: true, errors: undefined })),
                switchMap(({ userCredential }) => authService.login(userCredential).pipe(
                    tapResponse({
                        next: (token) => patchState(store, { token }),
                        error: (errors: string | undefined) => patchState(store, { errors: errors })
                    })
                )),
                switchMap(() => authService.getUser().
                    pipe(
                        tapResponse({
                            next: (user: User) => patchState(store, { user: user, loading: false }),
                            error: (errors: string | undefined) => patchState(store, { errors, loading: false }),
                            finalize: () =>router.navigate(['private'])
                        })
                    ))
            )
        ),
        logout: rxMethod<void>(
            pipe(
                distinctUntilChanged(),
                tap(()=>patchState(store,{loading:true,errors:undefined})),
                switchMap(()=>authService.logOut().pipe(
                    tap(()=>store.resetState()),
                    finalize(() =>router.navigate(['public']))  
                ))
            )
        )
    })
    )
);