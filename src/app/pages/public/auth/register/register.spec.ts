import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register } from './register';
import { JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldError } from '../../../../shared/components/form-field-error/form-field-error';
import { provideRouter, RouterLink } from '@angular/router';

describe('Register', () => {
  let component: Register;
  let fixture: ComponentFixture<Register>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Register, JsonPipe, ReactiveFormsModule, FormFieldError, RouterLink],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Register);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
