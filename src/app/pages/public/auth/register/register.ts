import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OAuth } from '../../../../services/o-auth';
import { Router, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { passwordMatchValidator } from '../../../../shared/validators/password-match.validator';
import { emailTakenAsyncValidator } from '../../../../shared/validators/email-taken-async.validator';
import { catchError, finalize, Subject, takeUntil, throwError } from 'rxjs';
import { FormFieldError } from '../../../../shared/components/form-field-error/form-field-error';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, JsonPipe, FormFieldError, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private formBuilder = inject(FormBuilder);
  private authService = inject(OAuth);
  private router = inject(Router);
  private destroy$ = new Subject<boolean>();

  loading = signal<boolean>(false);

  readonly errorMessages = {
    name:{
      required:'Name is required',
      minlength: 'Min length characters for name is 2'
    },
    surname:{
      required:'Surname is required',
      minlength: 'Min length characters for surname is 2'
    },
    age:{
      required:'Age is required',
      min: 'Min age is 15',
      max: 'Max age is 150'
    },
    email:{
      required:'Email is required',
      pattern:'Email must be a mail',
      emailTaken: 'Email is already taken'
    },
    password:{
      required: 'Password is required'
    },
    repeatPassword:{
      required: 'Repeat password is required',
      passwordMismatch: 'Password mismatch'
    }

  }

  registerForm : FormGroup = this.formBuilder.group({
    name:['',[Validators.required, Validators.minLength(2)],[]],
    surname:['',[Validators.required, Validators.minLength(2)],[]],
    age:[null, [Validators.required, Validators.min(15), Validators.max(150)],[]],
    date:['',[],[]],
    email:['',[Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)],[emailTakenAsyncValidator()]],
    password:['',[Validators.required],[]],
    repeatPassword:['',[Validators.required],[]]
  },
  {
    validators:passwordMatchValidator()
  }
  )

  onSubmit(){
    console.log(this.registerForm)
    if(this.registerForm.invalid) return;

    this.loading.set(true);

    const {repeatPassword, ...formValue} = this.registerForm.value
    this.authService.register(formValue).pipe(
      takeUntil(this.destroy$),
      finalize(()=>{
        this.loading.set(false);
        this.router.navigate(['private'])
      }),
      catchError((error)=>{
        this.loading.set(false);
        return throwError(()=>error)
      })
    ).subscribe()
  }

  getControlName(name:string): AbstractControl<any,any,any> | null{
    return this.registerForm.get(name)
  }
}
