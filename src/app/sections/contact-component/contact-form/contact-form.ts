import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
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

  post = {
    endPoint: 'https://sophie.kornetzki@gmail.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  mailTest: Boolean = true;

  http = inject(HttpClient);

  onSubmit() {
    if (this.contactForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
        next: (response) => {
          this.contactForm.reset();
        },
        error: (error) => {
          console.error(error);
        },
      });
    } else if (this.contactForm.valid && this.mailTest) {
      this.contactForm.reset();
    }
  }
}
