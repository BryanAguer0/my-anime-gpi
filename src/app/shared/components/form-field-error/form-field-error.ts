import { Component, input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  imports: [],
  templateUrl: './form-field-error.html',
  styleUrl: './form-field-error.css',
})
export class FormFieldError {
  control = input<AbstractControl | null>(null);
  messages = input<Record<string, string>>({});
  formErrors = input<ValidationErrors | null>(null)

  errorMessage(): string | null{
    const control = this.control();
    const messages = this.messages();

    const formErrors = this.formErrors()??{}

    if((!control?.touched || !control.invalid || Object.keys(messages).length===0) && this.formErrors()===null) return null;

    const errors = control?.errors??{}

    for (const key of Object.keys(errors)){
      if(messages[key]) return messages[key];
    }
    for (const key of Object.keys(formErrors)){
      if(messages[key]) return messages[key];
    }

    return null;
  }
}
