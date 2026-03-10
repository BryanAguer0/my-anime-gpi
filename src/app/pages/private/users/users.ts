import { Component, inject, resource, signal } from '@angular/core';
import { RegisterFormData, RegisterFormSignalData } from '../../../models/user';
import { form, minLength, required, max, min, pattern, validateAsync, validate, FormField, submit } from '@angular/forms/signals';
import { TAKEN_EMAILS } from '../../../shared/validators/email-taken-async.validator';
import { OAuth } from '../../../services/o-auth';
import { lastValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [FormField],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private authService = inject(OAuth);

  loading = signal<boolean>(false);
  userModel = signal<RegisterFormSignalData>({
    name: '',
    surname: '',
    age: 15,
    date: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  userForm = form(this.userModel, (schemePath) => {

    //name
    required(schemePath.name, { message: 'Name is required' });
    minLength(schemePath.name, 2, { message: 'Min length characters for name is 2' });

    //surname
    required(schemePath.surname, { message: 'Surname is required' });
    minLength(schemePath.surname, 2, { message: 'Min length characters for surname is 2' });

    //age
    required(schemePath.age, { message: 'Age is required' });
    min(schemePath.age, 15, { message: 'Min age is 15' });
    max(schemePath.age, 150, { message: 'Max age is 150' });

    //email
    required(schemePath.email, { message: 'Email is required' });
    pattern(schemePath.email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, { message: 'Email must be a valid mail' });
    validateAsync(schemePath.email, {
      params: ({ value }) => value() || undefined,
      factory: (emailSignal) => resource({
        params: () => emailSignal(),
        loader: async ({ params: email }) => {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          return TAKEN_EMAILS.includes(email.toLowerCase())
        }
      }),
      onSuccess: (email_taken) => email_taken ? { kind: 'email_taken', message: 'Email is already taken' } : null,
      onError: () => ({
        kind: 'server_error',
        message: 'something went wrong'
      })
    })

    //password
    required(schemePath.password, { message: 'Password is required' });

    //repeat password
    required(schemePath.repeatPassword, { message: 'Repeat password is required' });
    validate(schemePath.repeatPassword, ({value, valueOf})=>{
      const repeatPassword = value();
      const password = valueOf(schemePath.password);

      return repeatPassword!==password ? {
        kind:'passwordMismatch',
        message:'Password mismatch'
      }:null
    })
  })

  onSubmit() {
    submit(this.userForm, async()=>{
      const model = this.userModel();
      const {repeatPassword, ...formField} = model;

      return lastValueFrom(this.authService.addUser(formField).pipe(
        map(()=>null)
      ))

      // return new Promise((resolve,reject)=>{
      //   this.authService.addUser(formField).subscribe({
      //     next:()=>resolve(null),
      //     error:(err)=>reject(err)
      //   })
      // })
    })
  }
}
