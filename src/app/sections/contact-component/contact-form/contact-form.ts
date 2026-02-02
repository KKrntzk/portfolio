import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

export function emailDomainValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (!value) {
      return null;
    }
    const isValid = value.toLowerCase().endsWith('.de') || value.toLowerCase().endsWith('.com');
    return isValid ? null : { invalidDomain: true };
  };
}

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email, emailDomainValidator()]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    privacy: new FormControl(false, [Validators.requiredTrue]),
  });

  onSubmit() {
    console.log('Formular erfolgreich gesendet:', this.contactForm.value);
  }
}
