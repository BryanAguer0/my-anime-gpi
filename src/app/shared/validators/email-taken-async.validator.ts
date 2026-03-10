import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";
export const TAKEN_EMAILS = ['test@test.com', 'example@gmail.com']

export function emailTakenAsyncValidator() : AsyncValidatorFn{
  return (control : AbstractControl) : Observable<ValidationErrors|null> =>{
    const email = control.value??''
    if(!email) return of(null);

    return of(email).pipe(
      delay(1500),
      map((response)=>TAKEN_EMAILS.includes(response.toLowerCase())?{
        emailTaken:true
      }: null)
    )
  }
}
