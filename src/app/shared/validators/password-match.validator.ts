import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMatchValidator(
  passwordControlName : string = 'password',
  repeatPasswordControlName : string = "repeatPassword"
  ) : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null =>{
      const formGroup = control;
      const password = formGroup.get(passwordControlName)?.value;
      const repeatPassword = formGroup.get(repeatPasswordControlName)?.value;

      if(!password || !repeatPassword) return null;
      return password === repeatPassword ? null : {
        passwordMismatch:true
      }
  }
}
